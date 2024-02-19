package routes

import (
	"github.com/Asad2730/SportsSupplement/handlers"
	"github.com/gin-gonic/gin"
)

func CartRoutes(r *gin.RouterGroup) {
	r.GET("/:email", handlers.GetUserHistory)
	r.POST("/", handlers.AddCart)
	r.POST("/AddCartProduct", handlers.AddCartProduct)
}
