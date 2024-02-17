package routes

import (
	"github.com/Asad2730/SportsSupplement/handlers"
	"github.com/gin-gonic/gin"
)

func ProductRoutes(r *gin.RouterGroup) {
	r.GET("/:filename", handlers.GetProductImage)
	r.GET("/", handlers.GetAllProducts)
	r.POST("/", handlers.AddProduct)
}
