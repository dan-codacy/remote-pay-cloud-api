/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof payments
*/
var LineItemPayment = function() {
  this._class_ = LineItemPayment;
  this.id = undefined;
  this.percentage = undefined;
  this.binName = undefined;
  this.refunded = undefined;
};


/**
* Set the field value
* Unique identifier; TBD this is confusing because it's used as either line item id or payment id
*
* @memberof payments.LineItemPayment
* @param {String} id 
*/
LineItemPayment.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier; TBD this is confusing because it's used as either line item id or payment id
* @memberof payments.LineItemPayment
* @return {String} 
*/
LineItemPayment.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Percent of this line item covered by this payment
*
* @memberof payments.LineItemPayment
* @param {Number} percentage must be a long integer
*/
LineItemPayment.prototype.setPercentage = function(percentage) {
  this.percentage = percentage;
};

/**
* Get the field value
* Percent of this line item covered by this payment
* @memberof payments.LineItemPayment
* @return {Number} must be a long integer
*/
LineItemPayment.prototype.getPercentage = function() {
  return this.percentage;
};

/**
* Set the field value
* Bin this line item payment was for
*
* @memberof payments.LineItemPayment
* @param {Null|String} binName 
*/
LineItemPayment.prototype.setBinName = function(binName) {
  this.binName = binName;
};

/**
* Get the field value
* Bin this line item payment was for
* @memberof payments.LineItemPayment
* @return {Null|String} 
*/
LineItemPayment.prototype.getBinName = function() {
  return this.binName;
};

/**
* Set the field value
* Payment has been refunded
*
* @memberof payments.LineItemPayment
* @param {Boolean} refunded 
*/
LineItemPayment.prototype.setRefunded = function(refunded) {
  this.refunded = refunded;
};

/**
* Get the field value
* Payment has been refunded
* @memberof payments.LineItemPayment
* @return {Boolean} 
*/
LineItemPayment.prototype.getRefunded = function() {
  return this.refunded;
};

/**
* @memberof payments.LineItemPayment
* @private
*/
LineItemPayment.prototype.getMetaInfo = function(fieldName) {
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

LineItemPayment.prototype.toString = function() {
  return JSON.stringify(this);
};

LineItemPayment._meta_ =  {fields:  {}};
LineItemPayment._meta_._class_ =  LineItemPayment;
LineItemPayment._meta_.fields["id"] = {};
LineItemPayment._meta_.fields["id"].type = String;
LineItemPayment._meta_.fields["percentage"] = {};
LineItemPayment._meta_.fields["percentage"].type = Number;
LineItemPayment._meta_.fields["binName"] = {};
LineItemPayment._meta_.fields["binName"].type = String;
LineItemPayment._meta_.fields["refunded"] = {};
LineItemPayment._meta_.fields["refunded"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = LineItemPayment;
}

