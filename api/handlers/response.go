package handlers

import "github.com/Asad2730/SportsSupplement/protobufModel"

func getError(msg string) *protobufModel.Error {
	return &protobufModel.Error{
		Message: msg,
	}
}

func getSuccess(msg string) *protobufModel.Error {
	return &protobufModel.Error{
		Message: msg,
	}
}
