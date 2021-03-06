/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof payments
*/
var Tag = function() {
  this._class_ = Tag;
  this.tag = undefined;
  this.length = undefined;
  this.value = undefined;
  this.description = undefined;
  this.optional = undefined;
  this.filter = undefined;
};


/**
* Set the field value
* @memberof payments.Tag
* @param {String} tag 
*/
Tag.prototype.setTag = function(tag) {
  this.tag = tag;
};

/**
* Get the field value
* @memberof payments.Tag
* @return {String} 
*/
Tag.prototype.getTag = function() {
  return this.tag;
};

/**
* Set the field value
* @memberof payments.Tag
* @param {String} length 
*/
Tag.prototype.setLength = function(length) {
  this.length = length;
};

/**
* Get the field value
* @memberof payments.Tag
* @return {String} 
*/
Tag.prototype.getLength = function() {
  return this.length;
};

/**
* Set the field value
* @memberof payments.Tag
* @param {String} value 
*/
Tag.prototype.setValue = function(value) {
  this.value = value;
};

/**
* Get the field value
* @memberof payments.Tag
* @return {String} 
*/
Tag.prototype.getValue = function() {
  return this.value;
};

/**
* Set the field value
* @memberof payments.Tag
* @param {String} description 
*/
Tag.prototype.setDescription = function(description) {
  this.description = description;
};

/**
* Get the field value
* @memberof payments.Tag
* @return {String} 
*/
Tag.prototype.getDescription = function() {
  return this.description;
};

/**
* Set the field value
* @memberof payments.Tag
* @param {String} optional 
*/
Tag.prototype.setOptional = function(optional) {
  this.optional = optional;
};

/**
* Get the field value
* @memberof payments.Tag
* @return {String} 
*/
Tag.prototype.getOptional = function() {
  return this.optional;
};

/**
* Set the field value
* @memberof payments.Tag
* @param {String} filter 
*/
Tag.prototype.setFilter = function(filter) {
  this.filter = filter;
};

/**
* Get the field value
* @memberof payments.Tag
* @return {String} 
*/
Tag.prototype.getFilter = function() {
  return this.filter;
};

/**
* @memberof payments.Tag
* @private
*/
Tag.prototype.getMetaInfo = function(fieldName) {
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

Tag.prototype.toString = function() {
  return JSON.stringify(this);
};

Tag._meta_ =  {fields:  {}};
Tag._meta_._class_ =  Tag;
Tag._meta_.fields["tag"] = {};
Tag._meta_.fields["tag"].type = String;
Tag._meta_.fields["length"] = {};
Tag._meta_.fields["length"].type = String;
Tag._meta_.fields["value"] = {};
Tag._meta_.fields["value"].type = String;
Tag._meta_.fields["description"] = {};
Tag._meta_.fields["description"].type = String;
Tag._meta_.fields["optional"] = {};
Tag._meta_.fields["optional"].type = String;
Tag._meta_.fields["filter"] = {};
Tag._meta_.fields["filter"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Tag;
}

