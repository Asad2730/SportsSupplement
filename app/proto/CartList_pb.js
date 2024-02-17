// source: CartList.proto
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

var Cart_pb = require('./Cart_pb.js');
goog.object.extend(proto, Cart_pb);
goog.exportSymbol('proto.CartList', null, global);
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
proto.CartList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CartList.repeatedFields_, null);
};
goog.inherits(proto.CartList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CartList.displayName = 'proto.CartList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CartList.repeatedFields_ = [1];



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
proto.CartList.prototype.toObject = function(opt_includeInstance) {
  return proto.CartList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CartList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CartList.toObject = function(includeInstance, msg) {
  var f, obj = {
    cartsList: jspb.Message.toObjectList(msg.getCartsList(),
    Cart_pb.Cart.toObject, includeInstance)
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
 * @return {!proto.CartList}
 */
proto.CartList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CartList;
  return proto.CartList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CartList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CartList}
 */
proto.CartList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Cart_pb.Cart;
      reader.readMessage(value,Cart_pb.Cart.deserializeBinaryFromReader);
      msg.addCarts(value);
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
proto.CartList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CartList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CartList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CartList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Cart_pb.Cart.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Cart carts = 1;
 * @return {!Array<!proto.Cart>}
 */
proto.CartList.prototype.getCartsList = function() {
  return /** @type{!Array<!proto.Cart>} */ (
    jspb.Message.getRepeatedWrapperField(this, Cart_pb.Cart, 1));
};


/**
 * @param {!Array<!proto.Cart>} value
 * @return {!proto.CartList} returns this
*/
proto.CartList.prototype.setCartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Cart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Cart}
 */
proto.CartList.prototype.addCarts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Cart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.CartList} returns this
 */
proto.CartList.prototype.clearCartsList = function() {
  return this.setCartsList([]);
};


goog.object.extend(exports, proto);
