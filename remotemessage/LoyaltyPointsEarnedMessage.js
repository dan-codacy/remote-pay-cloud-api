/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/** Used in loyalty systems. */
/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var LoyaltyPointsEarnedMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = LoyaltyPointsEarnedMessage;
  this.setMethod(remotemessage_Method["SHOW_LOYALTY_POINTS_EARNED_SCREEN"]);
  this.loyaltyUuid = undefined;
  this.points = undefined;
  this.orderId = undefined;
};

LoyaltyPointsEarnedMessage.prototype = Object.create(remotemessage_Message.prototype);
LoyaltyPointsEarnedMessage.prototype.constructor = LoyaltyPointsEarnedMessage;

/**
* Set the field value
* The id for the loyalty entity (likely a customer id of some type)
*
* @memberof remotemessage.LoyaltyPointsEarnedMessage
* @param {String} loyaltyUuid 
*/
LoyaltyPointsEarnedMessage.prototype.setLoyaltyUuid = function(loyaltyUuid) {
  this.loyaltyUuid = loyaltyUuid;
};

/**
* Get the field value
* The id for the loyalty entity (likely a customer id of some type)
* @memberof remotemessage.LoyaltyPointsEarnedMessage
* @return {String} 
*/
LoyaltyPointsEarnedMessage.prototype.getLoyaltyUuid = function() {
  return this.loyaltyUuid;
};

/**
* Set the field value
* The number of points calculated for the event
*
* @memberof remotemessage.LoyaltyPointsEarnedMessage
* @param {Number} points must be a long integer
*/
LoyaltyPointsEarnedMessage.prototype.setPoints = function(points) {
  this.points = points;
};

/**
* Get the field value
* The number of points calculated for the event
* @memberof remotemessage.LoyaltyPointsEarnedMessage
* @return {Number} must be a long integer
*/
LoyaltyPointsEarnedMessage.prototype.getPoints = function() {
  return this.points;
};

/**
* Set the field value
* The order with which the awarded are associated
*
* @memberof remotemessage.LoyaltyPointsEarnedMessage
* @param {String} orderId 
*/
LoyaltyPointsEarnedMessage.prototype.setOrderId = function(orderId) {
  this.orderId = orderId;
};

/**
* Get the field value
* The order with which the awarded are associated
* @memberof remotemessage.LoyaltyPointsEarnedMessage
* @return {String} 
*/
LoyaltyPointsEarnedMessage.prototype.getOrderId = function() {
  return this.orderId;
};

LoyaltyPointsEarnedMessage._meta_ =  {fields:  {}};
LoyaltyPointsEarnedMessage._meta_._class_ =  LoyaltyPointsEarnedMessage;
LoyaltyPointsEarnedMessage._meta_._superMeta_ = remotemessage_Message._meta_;
LoyaltyPointsEarnedMessage._meta_.fields["loyaltyUuid"] = {};
LoyaltyPointsEarnedMessage._meta_.fields["loyaltyUuid"].type = String;
LoyaltyPointsEarnedMessage._meta_.fields["points"] = {};
LoyaltyPointsEarnedMessage._meta_.fields["points"].type = Number;
LoyaltyPointsEarnedMessage._meta_.fields["orderId"] = {};
LoyaltyPointsEarnedMessage._meta_.fields["orderId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = LoyaltyPointsEarnedMessage;
}

