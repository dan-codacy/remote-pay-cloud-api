/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var device_BundleItem = require("../device/BundleItem");

/**
* @constructor
* @memberof device
*/
var DeviceBundle = function() {
  this._class_ = DeviceBundle;
  this.id = undefined;
  this.bundleIndicator = undefined;
  this.description = undefined;
  this.bundleItems = undefined;
  this.createdTime = undefined;
  this.modifiedTime = undefined;
  this.deletedTime = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof device.DeviceBundle
* @param {String} id 
*/
DeviceBundle.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof device.DeviceBundle
* @return {String} 
*/
DeviceBundle.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* @memberof device.DeviceBundle
* @param {String} bundleIndicator 
*/
DeviceBundle.prototype.setBundleIndicator = function(bundleIndicator) {
  this.bundleIndicator = bundleIndicator;
};

/**
* Get the field value
* @memberof device.DeviceBundle
* @return {String} 
*/
DeviceBundle.prototype.getBundleIndicator = function() {
  return this.bundleIndicator;
};

/**
* Set the field value
* @memberof device.DeviceBundle
* @param {String} description 
*/
DeviceBundle.prototype.setDescription = function(description) {
  this.description = description;
};

/**
* Get the field value
* @memberof device.DeviceBundle
* @return {String} 
*/
DeviceBundle.prototype.getDescription = function() {
  return this.description;
};

/**
* Set the field value
* @memberof device.DeviceBundle
* @param {Array.<device.BundleItem>} bundleItems An array of 
*/
DeviceBundle.prototype.setBundleItems = function(bundleItems) {
  this.bundleItems = bundleItems;
};

/**
* Get the field value
* @memberof device.DeviceBundle
* @return {Array.<device.BundleItem>} An array of 
*/
DeviceBundle.prototype.getBundleItems = function() {
  return this.bundleItems;
};

/**
* Set the field value
* @memberof device.DeviceBundle
* @param {Number} createdTime must be a long integer
*/
DeviceBundle.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* @memberof device.DeviceBundle
* @return {Number} must be a long integer
*/
DeviceBundle.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* @memberof device.DeviceBundle
* @param {Number} modifiedTime must be a long integer
*/
DeviceBundle.prototype.setModifiedTime = function(modifiedTime) {
  this.modifiedTime = modifiedTime;
};

/**
* Get the field value
* @memberof device.DeviceBundle
* @return {Number} must be a long integer
*/
DeviceBundle.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Set the field value
* @memberof device.DeviceBundle
* @param {Number} deletedTime must be a long integer
*/
DeviceBundle.prototype.setDeletedTime = function(deletedTime) {
  this.deletedTime = deletedTime;
};

/**
* Get the field value
* @memberof device.DeviceBundle
* @return {Number} must be a long integer
*/
DeviceBundle.prototype.getDeletedTime = function() {
  return this.deletedTime;
};

/**
* @memberof device.DeviceBundle
* @private
*/
DeviceBundle.prototype.getMetaInfo = function(fieldName) {
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

DeviceBundle.prototype.toString = function() {
  return JSON.stringify(this);
};

DeviceBundle._meta_ =  {fields:  {}};
DeviceBundle._meta_._class_ =  DeviceBundle;
DeviceBundle._meta_.fields["id"] = {};
DeviceBundle._meta_.fields["id"].type = String;
DeviceBundle._meta_.fields["bundleIndicator"] = {};
DeviceBundle._meta_.fields["bundleIndicator"].type = String;
DeviceBundle._meta_.fields["description"] = {};
DeviceBundle._meta_.fields["description"].type = String;
DeviceBundle._meta_.fields["bundleItems"] = {};
DeviceBundle._meta_.fields["bundleItems"].type = Array;
DeviceBundle._meta_.fields["bundleItems"].elementType = device_BundleItem;
DeviceBundle._meta_.fields["createdTime"] = {};
DeviceBundle._meta_.fields["createdTime"].type = Number;
DeviceBundle._meta_.fields["modifiedTime"] = {};
DeviceBundle._meta_.fields["modifiedTime"].type = Number;
DeviceBundle._meta_.fields["deletedTime"] = {};
DeviceBundle._meta_.fields["deletedTime"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DeviceBundle;
}
