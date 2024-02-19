package handlers

import (
	"fmt"
	"io"

	"github.com/Asad2730/SportsSupplement/conn"
	"github.com/Asad2730/SportsSupplement/protobufModel"
	"github.com/gin-gonic/gin"
	"google.golang.org/protobuf/proto"
)

func Signup(c *gin.Context) {
	var user protobufModel.User

	data, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.ProtoBuf(501, getError(err.Error()))
		return
	}

	if err := proto.Unmarshal(data, &user); err != nil {
		c.ProtoBuf(402, getError(err.Error()))
		return
	}

	var existingUser protobufModel.User
	if err := conn.Db.Where("email = ?", user.Email).First(&existingUser).Error; err == nil {
		c.ProtoBuf(409, getError(err.Error()))
		return
	}

	if err := conn.Db.Create(&user).Error; err != nil {
		c.ProtoBuf(500, getError(err.Error()))
		return
	}
	c.ProtoBuf(201, getSuccess("User Created"))

}

func Login(c *gin.Context) {

	var request protobufModel.User

	data, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.ProtoBuf(500, getError(err.Error()))
		return
	}

	if err := proto.Unmarshal(data, &request); err != nil {
		c.ProtoBuf(402, getError(err.Error()))
		return
	}

	var user protobufModel.User

	fmt.Print("request User emai is -->", request.Email)
	fmt.Print("request User password is -->", request.Password)

	if err := conn.Db.Where("email = ? AND  password = ?", request.Email, request.Password).First(&user).Error; err != nil {
		c.ProtoBuf(404, getError(err.Error()))
		return
	}

	c.ProtoBuf(200, &user)

}
