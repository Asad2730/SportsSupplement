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
	routes.UserAuthRoutes(r)
	routes.ProductRoutes(r)
	r.Run("0.0.0.0:3000")
}
