// source: ProductList.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var Product_pb = require('./Product_pb.js');
goog.object.extend(proto, Product_pb);
goog.exportSymbol('proto.ProductList', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ProductList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProductList.repeatedFields_, null);
};
goog.inherits(proto.ProductList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProductList.displayName = 'proto.ProductList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProductList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ProductList.prototype.toObject = function(opt_includeInstance) {
  return proto.ProductList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProductList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProductList.toObject = function(includeInstance, msg) {
  var f, obj = {
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    Product_pb.Product.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ProductList}
 */
proto.ProductList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProductList;
  return proto.ProductList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProductList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProductList}
 */
proto.ProductList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Product_pb.Product;
      reader.readMessage(value,Product_pb.Product.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ProductList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProductList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProductList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProductList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Product_pb.Product.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Product products = 1;
 * @return {!Array<!proto.Product>}
 */
proto.ProductList.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.Product>} */ (
    jspb.Message.getRepeatedWrapperField(this, Product_pb.Product, 1));
};


/**
 * @param {!Array<!proto.Product>} value
 * @return {!proto.ProductList} returns this
*/
proto.ProductList.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Product=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Product}
 */
proto.ProductList.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Product, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProductList} returns this
 */
proto.ProductList.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};


goog.object.extend(exports, proto);
