/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_CreditRefund = require("../payments/CreditRefund");
var payments_Payment = require("../payments/Payment");
var payments_Refund = require("../payments/Refund");
var payments_Credit = require("../payments/Credit");

/**
* @constructor
* @memberof payments
*/
var Transaction = function() {
  this._class_ = Transaction;
  this.createdTime = undefined;
  this.clientCreatedTime = undefined;
  this.payment = undefined;
  this.refund = undefined;
  this.credit = undefined;
  this.creditRefund = undefined;
};


/**
* Set the field value
* The time when the transaction was recorded on the server
*
* @memberof payments.Transaction
* @param {Number} createdTime must be a long integer
*/
Transaction.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* The time when the transaction was recorded on the server
* @memberof payments.Transaction
* @return {Number} must be a long integer
*/
Transaction.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* The time when the transaction was recorded on the client
*
* @memberof payments.Transaction
* @param {Number} clientCreatedTime must be a long integer
*/
Transaction.prototype.setClientCreatedTime = function(clientCreatedTime) {
  this.clientCreatedTime = clientCreatedTime;
};

/**
* Get the field value
* The time when the transaction was recorded on the client
* @memberof payments.Transaction
* @return {Number} must be a long integer
*/
Transaction.prototype.getClientCreatedTime = function() {
  return this.clientCreatedTime;
};

/**
* Set the field value
* @memberof payments.Transaction
* @param {payments.Payment} payment 
*/
Transaction.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* @memberof payments.Transaction
* @return {payments.Payment} 
*/
Transaction.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* @memberof payments.Transaction
* @param {payments.Refund} refund 
*/
Transaction.prototype.setRefund = function(refund) {
  this.refund = refund;
};

/**
* Get the field value
* @memberof payments.Transaction
* @return {payments.Refund} 
*/
Transaction.prototype.getRefund = function() {
  return this.refund;
};

/**
* Set the field value
* @memberof payments.Transaction
* @param {payments.Credit} credit 
*/
Transaction.prototype.setCredit = function(credit) {
  this.credit = credit;
};

/**
* Get the field value
* @memberof payments.Transaction
* @return {payments.Credit} 
*/
Transaction.prototype.getCredit = function() {
  return this.credit;
};

/**
* Set the field value
* @memberof payments.Transaction
* @param {payments.CreditRefund} creditRefund 
*/
Transaction.prototype.setCreditRefund = function(creditRefund) {
  this.creditRefund = creditRefund;
};

/**
* Get the field value
* @memberof payments.Transaction
* @return {payments.CreditRefund} 
*/
Transaction.prototype.getCreditRefund = function() {
  return this.creditRefund;
};

/**
* @memberof payments.Transaction
* @private
*/
Transaction.prototype.getMetaInfo = function(fieldName) {
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

Transaction.prototype.toString = function() {
  return JSON.stringify(this);
};

Transaction._meta_ =  {fields:  {}};
Transaction._meta_._class_ =  Transaction;
Transaction._meta_.fields["createdTime"] = {};
Transaction._meta_.fields["createdTime"].type = Number;
Transaction._meta_.fields["clientCreatedTime"] = {};
Transaction._meta_.fields["clientCreatedTime"].type = Number;
Transaction._meta_.fields["payment"] = {};
Transaction._meta_.fields["payment"].type = payments_Payment;
Transaction._meta_.fields["refund"] = {};
Transaction._meta_.fields["refund"].type = payments_Refund;
Transaction._meta_.fields["credit"] = {};
Transaction._meta_.fields["credit"].type = payments_Credit;
Transaction._meta_.fields["creditRefund"] = {};
Transaction._meta_.fields["creditRefund"].type = payments_CreditRefund;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Transaction;
}

