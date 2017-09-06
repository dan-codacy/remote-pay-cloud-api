/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var base_Challenge = require("../base/Challenge");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var ConfirmPaymentMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = ConfirmPaymentMessage;
  this.setMethod(remotemessage_Method["CONFIRM_PAYMENT_MESSAGE"]);
  this.payment = undefined;
  this.challenges = undefined;
};

ConfirmPaymentMessage.prototype = Object.create(remotemessage_Message.prototype);
ConfirmPaymentMessage.prototype.constructor = ConfirmPaymentMessage;

/**
* Set the field value
* A payment
*
* @memberof remotemessage.ConfirmPaymentMessage
* @param {payments.Payment} payment 
*/
ConfirmPaymentMessage.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* A payment
* @memberof remotemessage.ConfirmPaymentMessage
* @return {payments.Payment} 
*/
ConfirmPaymentMessage.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* The challenges for the payment.
*
* @memberof remotemessage.ConfirmPaymentMessage
* @param {Array.<base.Challenge>} challenges An array of 
*/
ConfirmPaymentMessage.prototype.setChallenges = function(challenges) {
  this.challenges = challenges;
};

/**
* Get the field value
* The challenges for the payment.
* @memberof remotemessage.ConfirmPaymentMessage
* @return {Array.<base.Challenge>} An array of 
*/
ConfirmPaymentMessage.prototype.getChallenges = function() {
  return this.challenges;
};

ConfirmPaymentMessage._meta_ =  {fields:  {}};
ConfirmPaymentMessage._meta_._class_ =  ConfirmPaymentMessage;
ConfirmPaymentMessage._meta_._superMeta_ = remotemessage_Message._meta_;
ConfirmPaymentMessage._meta_.fields["payment"] = {};
ConfirmPaymentMessage._meta_.fields["payment"].type = payments_Payment;
ConfirmPaymentMessage._meta_.fields["challenges"] = {};
ConfirmPaymentMessage._meta_.fields["challenges"].type = Array;
ConfirmPaymentMessage._meta_.fields["challenges"].elementType = base_Challenge;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ConfirmPaymentMessage;
}
