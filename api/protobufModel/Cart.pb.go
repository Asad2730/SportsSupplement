// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v4.25.2
// source: Cart.proto

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

type Cart struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	UserEmail string  `protobuf:"bytes,2,opt,name=userEmail,proto3" json:"userEmail,omitempty"`
	TotalBill uint32  `protobuf:"varint,3,opt,name=totalBill,proto3" json:"totalBill,omitempty"`
	OrderDate string  `protobuf:"bytes,4,opt,name=orderDate,proto3" json:"orderDate,omitempty"`
	PIds      []int32 `protobuf:"varint,5,rep,packed,name=pIds,proto3" json:"pIds,omitempty"`
}

func (x *Cart) Reset() {
	*x = Cart{}
	if protoimpl.UnsafeEnabled {
		mi := &file_Cart_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Cart) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Cart) ProtoMessage() {}

func (x *Cart) ProtoReflect() protoreflect.Message {
	mi := &file_Cart_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Cart.ProtoReflect.Descriptor instead.
func (*Cart) Descriptor() ([]byte, []int) {
	return file_Cart_proto_rawDescGZIP(), []int{0}
}

func (x *Cart) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Cart) GetUserEmail() string {
	if x != nil {
		return x.UserEmail
	}
	return ""
}

func (x *Cart) GetTotalBill() uint32 {
	if x != nil {
		return x.TotalBill
	}
	return 0
}

func (x *Cart) GetOrderDate() string {
	if x != nil {
		return x.OrderDate
	}
	return ""
}

func (x *Cart) GetPIds() []int32 {
	if x != nil {
		return x.PIds
	}
	return nil
}

var File_Cart_proto protoreflect.FileDescriptor

var file_Cart_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x43, 0x61, 0x72, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x22, 0x84, 0x01, 0x0a, 0x04,
	0x43, 0x61, 0x72, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x1c, 0x0a, 0x09, 0x75, 0x73, 0x65, 0x72, 0x45, 0x6d, 0x61, 0x69,
	0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x73, 0x65, 0x72, 0x45, 0x6d, 0x61,
	0x69, 0x6c, 0x12, 0x1c, 0x0a, 0x09, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x42, 0x69, 0x6c, 0x6c, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x42, 0x69, 0x6c, 0x6c,
	0x12, 0x1c, 0x0a, 0x09, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x44, 0x61, 0x74, 0x65, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x44, 0x61, 0x74, 0x65, 0x12, 0x12,
	0x0a, 0x04, 0x70, 0x49, 0x64, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x05, 0x52, 0x04, 0x70, 0x49,
	0x64, 0x73, 0x42, 0x11, 0x5a, 0x0f, 0x2e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_Cart_proto_rawDescOnce sync.Once
	file_Cart_proto_rawDescData = file_Cart_proto_rawDesc
)

func file_Cart_proto_rawDescGZIP() []byte {
	file_Cart_proto_rawDescOnce.Do(func() {
		file_Cart_proto_rawDescData = protoimpl.X.CompressGZIP(file_Cart_proto_rawDescData)
	})
	return file_Cart_proto_rawDescData
}

var file_Cart_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_Cart_proto_goTypes = []interface{}{
	(*Cart)(nil), // 0: protobufModel.Cart
}
var file_Cart_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_Cart_proto_init() }
func file_Cart_proto_init() {
	if File_Cart_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_Cart_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Cart); i {
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
			RawDescriptor: file_Cart_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_Cart_proto_goTypes,
		DependencyIndexes: file_Cart_proto_depIdxs,
		MessageInfos:      file_Cart_proto_msgTypes,
	}.Build()
	File_Cart_proto = out.File
	file_Cart_proto_rawDesc = nil
	file_Cart_proto_goTypes = nil
	file_Cart_proto_depIdxs = nil
}
