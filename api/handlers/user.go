package handlers

import (
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
		c.ProtoBuf(501, err.Error())
		return
	}

	if err := proto.Unmarshal(data, &user); err != nil {
		c.ProtoBuf(402, err.Error())
		return
	}

	var existingUser protobufModel.User
	if err := conn.Db.Where("email = ?", user.Email).First(&existingUser).Error; err == nil {
		c.ProtoBuf(409, err.Error())
		return
	}

	if err := conn.Db.Create(&user).Error; err != nil {
		c.ProtoBuf(500, err.Error())
		return
	}
	c.ProtoBuf(201, "User Created")

}

func Login(c *gin.Context) {

	var request protobufModel.User

	data, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.ProtoBuf(500, err.Error())
		return
	}

	if err := proto.Unmarshal(data, &request); err != nil {
		c.ProtoBuf(402, err.Error())
		return
	}

	var user protobufModel.User
	if err := conn.Db.Where("email = ? AND  password = ?", request.Email, request.Password).First(&user).Error; err != nil {
		c.ProtoBuf(404, err.Error())
		return
	}

	c.ProtoBuf(200, &user)

}
