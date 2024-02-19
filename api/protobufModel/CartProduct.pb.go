// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v4.25.2
// source: CartProduct.proto

//comment this for js

package protobufModel

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CartProduct struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id  string `protobuf:"bytes,1,opt,name=Id,proto3" json:"Id,omitempty"`
	CId string `protobuf:"bytes,2,opt,name=cId,proto3" json:"cId,omitempty"`
	PId int32  `protobuf:"varint,3,opt,name=pId,proto3" json:"pId,omitempty"`
}

func (x *CartProduct) Reset() {
	*x = CartProduct{}
	if protoimpl.UnsafeEnabled {
		mi := &file_CartProduct_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CartProduct) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CartProduct) ProtoMessage() {}

func (x *CartProduct) ProtoReflect() protoreflect.Message {
	mi := &file_CartProduct_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CartProduct.ProtoReflect.Descriptor instead.
func (*CartProduct) Descriptor() ([]byte, []int) {
	return file_CartProduct_proto_rawDescGZIP(), []int{0}
}

func (x *CartProduct) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *CartProduct) GetCId() string {
	if x != nil {
		return x.CId
	}
	return ""
}

func (x *CartProduct) GetPId() int32 {
	if x != nil {
		return x.PId
	}
	return 0
}

var File_CartProduct_proto protoreflect.FileDescriptor

var file_CartProduct_proto_rawDesc = []byte{
	0x0a, 0x11, 0x43, 0x61, 0x72, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x4d, 0x6f, 0x64,
	0x65, 0x6c, 0x22, 0x41, 0x0a, 0x0b, 0x43, 0x61, 0x72, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63,
	0x74, 0x12, 0x0e, 0x0a, 0x02, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x49,
	0x64, 0x12, 0x10, 0x0a, 0x03, 0x63, 0x49, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x63, 0x49, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x70, 0x49, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x03, 0x70, 0x49, 0x64, 0x42, 0x11, 0x5a, 0x0f, 0x2e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_CartProduct_proto_rawDescOnce sync.Once
	file_CartProduct_proto_rawDescData = file_CartProduct_proto_rawDesc
)

func file_CartProduct_proto_rawDescGZIP() []byte {
	file_CartProduct_proto_rawDescOnce.Do(func() {
		file_CartProduct_proto_rawDescData = protoimpl.X.CompressGZIP(file_CartProduct_proto_rawDescData)
	})
	return file_CartProduct_proto_rawDescData
}

var file_CartProduct_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_CartProduct_proto_goTypes = []interface{}{
	(*CartProduct)(nil), // 0: protobufModel.CartProduct
}
var file_CartProduct_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_CartProduct_proto_init() }
func file_CartProduct_proto_init() {
	if File_CartProduct_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_CartProduct_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CartProduct); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_CartProduct_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_CartProduct_proto_goTypes,
		DependencyIndexes: file_CartProduct_proto_depIdxs,
		MessageInfos:      file_CartProduct_proto_msgTypes,
	}.Build()
	File_CartProduct_proto = out.File
	file_CartProduct_proto_rawDesc = nil
	file_CartProduct_proto_goTypes = nil
	file_CartProduct_proto_depIdxs = nil
}
