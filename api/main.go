package main

import (
	"github.com/Asad2730/SportsSupplement/conn"
	"github.com/Asad2730/SportsSupplement/routes"
	"github.com/gin-gonic/gin"
)

func init() {
	conn.Connect()
}

func main() {
	r := gin.Default()
	auth := r.Group("/auth")
	products := r.Group("/products")
	cart := r.Group("/cart")
	routes.UserAuthRoutes(auth)
	routes.ProductRoutes(products)
	routes.CartRoutes(cart)
	r.Run("0.0.0.0:3000")
}
