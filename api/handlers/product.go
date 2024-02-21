package handlers

import (
	"github.com/Asad2730/SportsSupplement/conn"
	"github.com/Asad2730/SportsSupplement/protobufModel"
	"github.com/gin-gonic/gin"
)

func GetProductImage(c *gin.Context) {
	filename := c.Param("filename")
	c.File("productImages/" + filename)
}

func AddProduct(c *gin.Context) {
	description := "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	products := []interface{}{
		map[string]interface{}{"Id": 0, "Name": "14th Superior 100% L-Glutamine 60 Ser", "Price": 8000, "Image": "1.jpg", "Description": description},
		map[string]interface{}{"Id": 1, "Name": "BPI – Best Amino 320 Tablets", "Price": 3000, "Image": "2.jpg", "Description": description},
		map[string]interface{}{"Id": 2, "Name": "BPI – CLA + CARNITINE – 50 Servings", "Price": 5000, "Image": "3.jpg", "Description": description},
		map[string]interface{}{"Id": 3, "Name": "BPI – ISO HD – 4lbs", "Price": 6000, "Image": "4.jpg", "Description": description},
		map[string]interface{}{"Id": 4, "Name": "BPI – Best Amino 320 Tablets", "Price": 8000, "Image": "5.jpg", "Description": description},
		map[string]interface{}{"Id": 5, "Name": "BPI – CLA + CARNITINE – 50 Servings", "Price": 2000, "Image": "6.jpg", "Description": description},
		map[string]interface{}{"Id": 6, "Name": "14th Superior 100% L-Glutamine 60 Ser", "Price": 8000, "Image": "7.jpg", "Description": description},
		map[string]interface{}{"Id": 7, "Name": "BPI – WHEY HD – 4lbs", "Price": 8500, "Image": "8.jpg", "Description": description},
		map[string]interface{}{"Id": 8, "Name": "BPI Sports Best BCAA, 60 Servings", "Price": 7000, "Image": "9.jpg", "Description": description},
		map[string]interface{}{"Id": 9, "Name": "BSN NO-Xplode Pre Workout – 60 Servings", "Price": 4000, "Image": "10.jpg", "Description": description},
		map[string]interface{}{"Id": 10, "Name": "C4 Extreme Energy 30 Servings Cellucor", "Price": 4500, "Image": "11.jpg", "Description": description},
		map[string]interface{}{"Id": 11, "Name": "Cellucor C4 Extreme Pre Workout, 30 Servings", "Price": 4500, "Image": "12.jpg", "Description": description},
	}

	for _, p := range products {
		productData := p.(map[string]interface{})
		product := &protobufModel.Product{
			Id:          int32(productData["Id"].(int)),
			Name:        productData["Name"].(string),
			Price:       int32(productData["Price"].(int)),
			Image:       productData["Image"].(string),
			Description: productData["Description"].(string),
		}

		if err := conn.Db.Create(&product).Error; err != nil {
			c.ProtoBuf(500, getError(err.Error()))
			return
		}

		c.ProtoBuf(201, getSuccess("Products Created"))
	}
}

func GetAllProducts(c *gin.Context) {

	var products []*protobufModel.Product
	if err := conn.Db.Find(&products).Error; err != nil {
		c.ProtoBuf(500, getError(err.Error()))
		return
	}

	productList := &protobufModel.ProductList{
		Products: products,
	}

	c.ProtoBuf(200, productList)

}
