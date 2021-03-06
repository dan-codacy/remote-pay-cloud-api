/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_LineItemPayment = require("../payments/LineItemPayment");
var payments_TaxableAmountRate = require("../payments/TaxableAmountRate");
var payments_ServiceChargeAmount = require("../payments/ServiceChargeAmount");
var payments_GiftCard = require("../payments/GiftCard");

/**
* @constructor
* @memberof payments
*/
var GiftCardTransaction = function() {
  this._class_ = GiftCardTransaction;
  this.id = undefined;
  this.amount = undefined;
  this.taxAmount = undefined;
  this.tipAmount = undefined;
  this.orderId = undefined;
  this.card = undefined;
  this.paymentIds = undefined;
  this.ignorePayment = false;
  this.serviceChargeAmount = undefined;
  this.taxableAmountRates = undefined;
  this.lineItems = undefined;
  this.employeeId = undefined;
  this.suppressPayment = "false";
};


/**
* Set the field value
* UUID
*
* @memberof payments.GiftCardTransaction
* @param {String} id 
*/
GiftCardTransaction.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* UUID
* @memberof payments.GiftCardTransaction
* @return {String} 
*/
GiftCardTransaction.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Transaction Amount
*
* @memberof payments.GiftCardTransaction
* @param {Number} amount must be a long integer
*/
GiftCardTransaction.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Transaction Amount
* @memberof payments.GiftCardTransaction
* @return {Number} must be a long integer
*/
GiftCardTransaction.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Tax Amount
*
* @memberof payments.GiftCardTransaction
* @param {Number} taxAmount must be a long integer
*/
GiftCardTransaction.prototype.setTaxAmount = function(taxAmount) {
  this.taxAmount = taxAmount;
};

/**
* Get the field value
* Tax Amount
* @memberof payments.GiftCardTransaction
* @return {Number} must be a long integer
*/
GiftCardTransaction.prototype.getTaxAmount = function() {
  return this.taxAmount;
};

/**
* Set the field value
* Tip Amount
*
* @memberof payments.GiftCardTransaction
* @param {Number} tipAmount must be a long integer
*/
GiftCardTransaction.prototype.setTipAmount = function(tipAmount) {
  this.tipAmount = tipAmount;
};

/**
* Get the field value
* Tip Amount
* @memberof payments.GiftCardTransaction
* @return {Number} must be a long integer
*/
GiftCardTransaction.prototype.getTipAmount = function() {
  return this.tipAmount;
};

/**
* Set the field value
* @memberof payments.GiftCardTransaction
* @param {String} orderId 
*/
GiftCardTransaction.prototype.setOrderId = function(orderId) {
  this.orderId = orderId;
};

/**
* Get the field value
* @memberof payments.GiftCardTransaction
* @return {String} 
*/
GiftCardTransaction.prototype.getOrderId = function() {
  return this.orderId;
};

/**
* Set the field value
* Gift Card
*
* @memberof payments.GiftCardTransaction
* @param {payments.GiftCard} card 
*/
GiftCardTransaction.prototype.setCard = function(card) {
  this.card = card;
};

/**
* Get the field value
* Gift Card
* @memberof payments.GiftCardTransaction
* @return {payments.GiftCard} 
*/
GiftCardTransaction.prototype.getCard = function() {
  return this.card;
};

/**
* Set the field value
* @memberof payments.GiftCardTransaction
* @param {Array.<String>} paymentIds An array of 
*/
GiftCardTransaction.prototype.setPaymentIds = function(paymentIds) {
  this.paymentIds = paymentIds;
};

/**
* Get the field value
* @memberof payments.GiftCardTransaction
* @return {Array.<String>} An array of 
*/
GiftCardTransaction.prototype.getPaymentIds = function() {
  return this.paymentIds;
};

/**
* Set the field value
* @memberof payments.GiftCardTransaction
* @param {Boolean} ignorePayment 
*/
GiftCardTransaction.prototype.setIgnorePayment = function(ignorePayment) {
  this.ignorePayment = ignorePayment;
};

/**
* Get the field value
* @memberof payments.GiftCardTransaction
* @return {Boolean} 
*/
GiftCardTransaction.prototype.getIgnorePayment = function() {
  return this.ignorePayment;
};

/**
* Set the field value
* @memberof payments.GiftCardTransaction
* @param {payments.ServiceChargeAmount} serviceChargeAmount 
*/
GiftCardTransaction.prototype.setServiceChargeAmount = function(serviceChargeAmount) {
  this.serviceChargeAmount = serviceChargeAmount;
};

/**
* Get the field value
* @memberof payments.GiftCardTransaction
* @return {payments.ServiceChargeAmount} 
*/
GiftCardTransaction.prototype.getServiceChargeAmount = function() {
  return this.serviceChargeAmount;
};

/**
* Set the field value
* @memberof payments.GiftCardTransaction
* @param {Array.<payments.TaxableAmountRate>} taxableAmountRates An array of 
*/
GiftCardTransaction.prototype.setTaxableAmountRates = function(taxableAmountRates) {
  this.taxableAmountRates = taxableAmountRates;
};

/**
* Get the field value
* @memberof payments.GiftCardTransaction
* @return {Array.<payments.TaxableAmountRate>} An array of 
*/
GiftCardTransaction.prototype.getTaxableAmountRates = function() {
  return this.taxableAmountRates;
};

/**
* Set the field value
* Payments that were made for this line item
*
* @memberof payments.GiftCardTransaction
* @param {Array.<payments.LineItemPayment>} lineItems An array of 
*/
GiftCardTransaction.prototype.setLineItems = function(lineItems) {
  this.lineItems = lineItems;
};

/**
* Get the field value
* Payments that were made for this line item
* @memberof payments.GiftCardTransaction
* @return {Array.<payments.LineItemPayment>} An array of 
*/
GiftCardTransaction.prototype.getLineItems = function() {
  return this.lineItems;
};

/**
* Set the field value
* @memberof payments.GiftCardTransaction
* @param {String} employeeId 
*/
GiftCardTransaction.prototype.setEmployeeId = function(employeeId) {
  this.employeeId = employeeId;
};

/**
* Get the field value
* @memberof payments.GiftCardTransaction
* @return {String} 
*/
GiftCardTransaction.prototype.getEmployeeId = function() {
  return this.employeeId;
};

/**
* Set the field value
* @memberof payments.GiftCardTransaction
* @param {Boolean} suppressPayment 
*/
GiftCardTransaction.prototype.setSuppressPayment = function(suppressPayment) {
  this.suppressPayment = suppressPayment;
};

/**
* Get the field value
* @memberof payments.GiftCardTransaction
* @return {Boolean} 
*/
GiftCardTransaction.prototype.getSuppressPayment = function() {
  return this.suppressPayment;
};

/**
* @memberof payments.GiftCardTransaction
* @private
*/
GiftCardTransaction.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    if(curclass._meta_._superMeta_) {
      curclass = curclass._meta_._superMeta_._class_;
    } else {
      curclass = null;
    }
  } while(curclass);
  return null;
};

GiftCardTransaction.prototype.toString = function() {
  return JSON.stringify(this);
};

GiftCardTransaction._meta_ =  {fields:  {}};
GiftCardTransaction._meta_._class_ =  GiftCardTransaction;
GiftCardTransaction._meta_.fields["id"] = {};
GiftCardTransaction._meta_.fields["id"].type = String;
GiftCardTransaction._meta_.fields["amount"] = {};
GiftCardTransaction._meta_.fields["amount"].type = Number;
GiftCardTransaction._meta_.fields["taxAmount"] = {};
GiftCardTransaction._meta_.fields["taxAmount"].type = Number;
GiftCardTransaction._meta_.fields["tipAmount"] = {};
GiftCardTransaction._meta_.fields["tipAmount"].type = Number;
GiftCardTransaction._meta_.fields["orderId"] = {};
GiftCardTransaction._meta_.fields["orderId"].type = String;
GiftCardTransaction._meta_.fields["card"] = {};
GiftCardTransaction._meta_.fields["card"].type = payments_GiftCard;
GiftCardTransaction._meta_.fields["paymentIds"] = {};
GiftCardTransaction._meta_.fields["paymentIds"].type = Array;
GiftCardTransaction._meta_.fields["ignorePayment"] = {};
GiftCardTransaction._meta_.fields["ignorePayment"].type = Boolean;
GiftCardTransaction._meta_.fields["serviceChargeAmount"] = {};
GiftCardTransaction._meta_.fields["serviceChargeAmount"].type = payments_ServiceChargeAmount;
GiftCardTransaction._meta_.fields["taxableAmountRates"] = {};
GiftCardTransaction._meta_.fields["taxableAmountRates"].type = Array;
GiftCardTransaction._meta_.fields["taxableAmountRates"].elementType = payments_TaxableAmountRate;
GiftCardTransaction._meta_.fields["lineItems"] = {};
GiftCardTransaction._meta_.fields["lineItems"].type = Array;
GiftCardTransaction._meta_.fields["lineItems"].elementType = payments_LineItemPayment;
GiftCardTransaction._meta_.fields["employeeId"] = {};
GiftCardTransaction._meta_.fields["employeeId"].type = String;
GiftCardTransaction._meta_.fields["suppressPayment"] = {};
GiftCardTransaction._meta_.fields["suppressPayment"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = GiftCardTransaction;
}

