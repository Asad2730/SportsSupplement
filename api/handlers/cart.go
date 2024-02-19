package handlers

import (
	"io"

	"github.com/Asad2730/SportsSupplement/conn"
	"github.com/Asad2730/SportsSupplement/protobufModel"
	"github.com/gin-gonic/gin"
	"google.golang.org/protobuf/proto"
)

func AddCart(c *gin.Context) {
	var cart protobufModel.Cart
	data, err := io.ReadAll(c.Request.Body)

	if err != nil {
		c.ProtoBuf(501, getError(err.Error()))
		return
	}

	if err := proto.Unmarshal(data, &cart); err != nil {
		c.ProtoBuf(402, getError(err.Error()))
		return
	}

	if err := conn.Db.Create(&cart).Error; err != nil {
		c.ProtoBuf(500, err.Error())
		return
	}

	c.ProtoBuf(201, getSuccess("Cart Added!"))

}

func AddCartProduct(c *gin.Context) {
	var CartProduct protobufModel.CartProduct
	data, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.ProtoBuf(501, getError(err.Error()))
		return
	}

	if err := proto.Unmarshal(data, &CartProduct); err != nil {
		c.ProtoBuf(402, getError(err.Error()))
		return
	}

	if err := conn.Db.Create(&CartProduct).Error; err != nil {
		c.ProtoBuf(500, err.Error())
		return
	}

	c.ProtoBuf(201, getSuccess("Cart Associate (CartProduct) Added"))

}

func GetUserHistory(c *gin.Context) {

	email := c.Param("email")
	var carts []*protobufModel.Cart

	if err := conn.Db.Where(&protobufModel.Cart{UserEmail: email}).Find(&carts).Error; err != nil {
		c.ProtoBuf(409, getError(err.Error()))
		return
	}

	cartList := &protobufModel.CartList{
		Carts: carts,
	}

	var products []*protobufModel.Product
	var cartProducts []*protobufModel.CartProduct

	for _, cart := range carts {
		var cartProduct []*protobufModel.CartProduct
		if err := conn.Db.Where(&protobufModel.CartProduct{Id: cart.GetId()}).Find(&cartProduct).Error; err != nil {
			c.ProtoBuf(500, getError(err.Error()))
			return
		}
		cartProducts = append(cartProducts, cartProduct...)
	}

	for _, i := range cartProducts {
		res, err := getProductById(i.GetPId())

		if err != nil {
			c.ProtoBuf(500, getError(err.Error()))
			return
		}
		products = append(products, res)
	}

	productList := &protobufModel.ProductList{
		Products: products,
	}

	result := &protobufModel.HistoryList{
		Products: productList,
		Carts:    cartList,
	}

	c.ProtoBuf(200, result)

}
