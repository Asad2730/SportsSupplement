package routes

import (
	"github.com/Asad2730/SportsSupplement/handlers"
	"github.com/gin-gonic/gin"
)

func ProductRoutes(r *gin.Engine) {
	r.GET("/productImage/:imageName", handlers.GetProductImage)
	r.GET("/getProducts", handlers.GetAllProducts)
	r.POST("/addProduct", handlers.AddProduct)
}
