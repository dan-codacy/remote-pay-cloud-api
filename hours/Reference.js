/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var hours_ReferenceType = require("../hours/ReferenceType");

/**
* @constructor
* @memberof hours
*/
var Reference = function() {
  this._class_ = Reference;
  this.id = undefined;
  this.type = undefined;
};


/**
* Set the field value
* ID of the reference that uses this set of hours
*
* @memberof hours.Reference
* @param {String} id 
*/
Reference.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* ID of the reference that uses this set of hours
* @memberof hours.Reference
* @return {String} 
*/
Reference.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* External type that these hours reference
*
* @memberof hours.Reference
* @param {hours.ReferenceType} type 
*/
Reference.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* External type that these hours reference
* @memberof hours.Reference
* @return {hours.ReferenceType} 
*/
Reference.prototype.getType = function() {
  return this.type;
};

/**
* @memberof hours.Reference
* @private
*/
Reference.prototype.getMetaInfo = function(fieldName) {
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

Reference.prototype.toString = function() {
  return JSON.stringify(this);
};

Reference._meta_ =  {fields:  {}};
Reference._meta_._class_ =  Reference;
Reference._meta_.fields["id"] = {};
Reference._meta_.fields["id"].type = String;
Reference._meta_.fields["type"] = {};
Reference._meta_.fields["type"].type = hours_ReferenceType;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Reference;
}

