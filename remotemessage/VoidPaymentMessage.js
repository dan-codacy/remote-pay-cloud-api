/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var order_VoidReason = require("../order/VoidReason");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var VoidPaymentMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = VoidPaymentMessage;
  this.setMethod(remotemessage_Method["VOID_PAYMENT"]);
  this.payment = undefined;
  this.voidReason = undefined;
  this.disableCloverPrinting = false;
  this.disableReceiptSelection = false;
};

VoidPaymentMessage.prototype = Object.create(remotemessage_Message.prototype);
VoidPaymentMessage.prototype.constructor = VoidPaymentMessage;

/**
* Set the field value
* A payment
*
* @memberof remotemessage.VoidPaymentMessage
* @param {payments.Payment} payment 
*/
VoidPaymentMessage.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* A payment
* @memberof remotemessage.VoidPaymentMessage
* @return {payments.Payment} 
*/
VoidPaymentMessage.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* @memberof remotemessage.VoidPaymentMessage
* @param {order.VoidReason} voidReason 
*/
VoidPaymentMessage.prototype.setVoidReason = function(voidReason) {
  this.voidReason = voidReason;
};

/**
* Get the field value
* @memberof remotemessage.VoidPaymentMessage
* @return {order.VoidReason} 
*/
VoidPaymentMessage.prototype.getVoidReason = function() {
  return this.voidReason;
};

/**
* Set the field value
* @memberof remotemessage.VoidPaymentMessage
* @param {Boolean} disableCloverPrinting 
*/
VoidPaymentMessage.prototype.setDisableCloverPrinting = function(disableCloverPrinting) {
  this.disableCloverPrinting = disableCloverPrinting;
};

/**
* Get the field value
* @memberof remotemessage.VoidPaymentMessage
* @return {Boolean} 
*/
VoidPaymentMessage.prototype.getDisableCloverPrinting = function() {
  return this.disableCloverPrinting;
};

/**
* Set the field value
* @memberof remotemessage.VoidPaymentMessage
* @param {Boolean} disableReceiptSelection 
*/
VoidPaymentMessage.prototype.setDisableReceiptSelection = function(disableReceiptSelection) {
  this.disableReceiptSelection = disableReceiptSelection;
};

/**
* Get the field value
* @memberof remotemessage.VoidPaymentMessage
* @return {Boolean} 
*/
VoidPaymentMessage.prototype.getDisableReceiptSelection = function() {
  return this.disableReceiptSelection;
};

VoidPaymentMessage._meta_ =  {fields:  {}};
VoidPaymentMessage._meta_._class_ =  VoidPaymentMessage;
VoidPaymentMessage._meta_._superMeta_ = remotemessage_Message._meta_;
VoidPaymentMessage._meta_.fields["payment"] = {};
VoidPaymentMessage._meta_.fields["payment"].type = payments_Payment;
VoidPaymentMessage._meta_.fields["voidReason"] = {};
VoidPaymentMessage._meta_.fields["voidReason"].type = order_VoidReason;
VoidPaymentMessage._meta_.fields["disableCloverPrinting"] = {};
VoidPaymentMessage._meta_.fields["disableCloverPrinting"].type = Boolean;
VoidPaymentMessage._meta_.fields["disableReceiptSelection"] = {};
VoidPaymentMessage._meta_.fields["disableReceiptSelection"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VoidPaymentMessage;
}

