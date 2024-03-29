// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v4.25.2
// source: CartList.proto

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

type CartList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Carts []*Cart `protobuf:"bytes,1,rep,name=carts,proto3" json:"carts,omitempty"`
}

func (x *CartList) Reset() {
	*x = CartList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_CartList_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CartList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CartList) ProtoMessage() {}

func (x *CartList) ProtoReflect() protoreflect.Message {
	mi := &file_CartList_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CartList.ProtoReflect.Descriptor instead.
func (*CartList) Descriptor() ([]byte, []int) {
	return file_CartList_proto_rawDescGZIP(), []int{0}
}

func (x *CartList) GetCarts() []*Cart {
	if x != nil {
		return x.Carts
	}
	return nil
}

var File_CartList_proto protoreflect.FileDescriptor

var file_CartList_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x43, 0x61, 0x72, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x1a,
	0x0a, 0x43, 0x61, 0x72, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x35, 0x0a, 0x08, 0x43,
	0x61, 0x72, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x29, 0x0a, 0x05, 0x63, 0x61, 0x72, 0x74, 0x73,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x2e, 0x43, 0x61, 0x72, 0x74, 0x52, 0x05, 0x63, 0x61, 0x72,
	0x74, 0x73, 0x42, 0x11, 0x5a, 0x0f, 0x2e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_CartList_proto_rawDescOnce sync.Once
	file_CartList_proto_rawDescData = file_CartList_proto_rawDesc
)

func file_CartList_proto_rawDescGZIP() []byte {
	file_CartList_proto_rawDescOnce.Do(func() {
		file_CartList_proto_rawDescData = protoimpl.X.CompressGZIP(file_CartList_proto_rawDescData)
	})
	return file_CartList_proto_rawDescData
}

var file_CartList_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_CartList_proto_goTypes = []interface{}{
	(*CartList)(nil), // 0: protobufModel.CartList
	(*Cart)(nil),     // 1: protobufModel.Cart
}
var file_CartList_proto_depIdxs = []int32{
	1, // 0: protobufModel.CartList.carts:type_name -> protobufModel.Cart
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_CartList_proto_init() }
func file_CartList_proto_init() {
	if File_CartList_proto != nil {
		return
	}
	file_Cart_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_CartList_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CartList); i {
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
			RawDescriptor: file_CartList_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_CartList_proto_goTypes,
		DependencyIndexes: file_CartList_proto_depIdxs,
		MessageInfos:      file_CartList_proto_msgTypes,
	}.Build()
	File_CartList_proto = out.File
	file_CartList_proto_rawDesc = nil
	file_CartList_proto_goTypes = nil
	file_CartList_proto_depIdxs = nil
}
