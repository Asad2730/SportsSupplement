package handlers

import (
	"io"

	"github.com/Asad2730/SportsSupplement/conn"
	"github.com/Asad2730/SportsSupplement/protobufModel"
	"github.com/gin-gonic/gin"
	"google.golang.org/protobuf/proto"
)

var contentType = "application/x-protobuf"

func Signup(c *gin.Context) {
	var user protobufModel.User
	c.Header("Content-Type", contentType)

	data, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.Data(500, contentType, []byte(err.Error()))
		return
	}

	if err := proto.Unmarshal(data, &user); err != nil {
		c.Data(402, contentType, []byte(err.Error()))
		return
	}

	var existingUser protobufModel.User
	if err := conn.Db.Where("email = ?", user.Email).First(&existingUser).Error; err == nil {
		c.Data(409, contentType, []byte(err.Error()))
		return
	}

	if err := conn.Db.Create(&user).Error; err != nil {
		c.Data(500, contentType, []byte(err.Error()))
		return
	}

	c.Data(201, contentType, []byte("User Created"))

}

func Login(c *gin.Context) {

	var request protobufModel.User
	c.Header("Content-Type", contentType)
	data, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.Data(500, contentType, []byte(err.Error()))
		return
	}

	if err := proto.Unmarshal(data, &request); err != nil {
		c.Data(402, contentType, []byte(err.Error()))
		return
	}

	var user protobufModel.User
	if err := conn.Db.Where("email = ? AND  password = ?", request.Email, request.Password).First(&user).Error; err != nil {
		c.Data(404, contentType, []byte(err.Error()))
		return
	}

	response, err := proto.Marshal(&user)
	if err != nil {
		c.Data(402, contentType, []byte(err.Error()))
		return
	}

	c.Data(200, contentType, response)

}
