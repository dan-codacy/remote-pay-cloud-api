/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof inventory
*/
var DataAssociation = function() {
  this._class_ = DataAssociation;
  this.primary = undefined;
  this.secondary = undefined;
};


/**
* Set the field value
* The primary object in an association, e.g., 'Item' in an 'Item - Tax Rate' association
*
* @memberof inventory.DataAssociation
* @param {base.Reference} primary 
*/
DataAssociation.prototype.setPrimary = function(primary) {
  this.primary = primary;
};

/**
* Get the field value
* The primary object in an association, e.g., 'Item' in an 'Item - Tax Rate' association
* @memberof inventory.DataAssociation
* @return {base.Reference} 
*/
DataAssociation.prototype.getPrimary = function() {
  return this.primary;
};

/**
* Set the field value
* The secondary object in an association, e.g., 'Tax Rate' in an 'Item - Tax Rate' association
*
* @memberof inventory.DataAssociation
* @param {base.Reference} secondary 
*/
DataAssociation.prototype.setSecondary = function(secondary) {
  this.secondary = secondary;
};

/**
* Get the field value
* The secondary object in an association, e.g., 'Tax Rate' in an 'Item - Tax Rate' association
* @memberof inventory.DataAssociation
* @return {base.Reference} 
*/
DataAssociation.prototype.getSecondary = function() {
  return this.secondary;
};

/**
* @memberof inventory.DataAssociation
* @private
*/
DataAssociation.prototype.getMetaInfo = function(fieldName) {
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

DataAssociation.prototype.toString = function() {
  return JSON.stringify(this);
};

DataAssociation._meta_ =  {fields:  {}};
DataAssociation._meta_._class_ =  DataAssociation;
DataAssociation._meta_.fields["primary"] = {};
DataAssociation._meta_.fields["primary"].type = base_Reference;
DataAssociation._meta_.fields["secondary"] = {};
DataAssociation._meta_.fields["secondary"].type = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DataAssociation;
}
