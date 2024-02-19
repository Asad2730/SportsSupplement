package routes

import (
	"github.com/Asad2730/SportsSupplement/handlers"
	"github.com/gin-gonic/gin"
)

func UserAuthRoutes(r *gin.RouterGroup) {
	r.POST("/login", handlers.Login)
	r.POST("/", handlers.Signup)
}
