/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @memberof remotepay
* @enum {string}
*/
DeviceErrorEventCode = {
  AbortEndpoint : "AbortEndpoint",
  AccessDenied : "AccessDenied",
  CancelIoFailed : "CancelIoFailed",
  DeviceAllreadyLocked : "DeviceAllreadyLocked",
  DeviceIoControl : "DeviceIoControl",
  DeviceNotFound : "DeviceNotFound",
  EndpointAllreadyLocked : "EndpointAllreadyLocked",
  GetDeviceKeyValueFailed : "GetDeviceKeyValueFailed",
  GetOverlappedResult : "GetOverlappedResult",
  GetString : "GetString",
  InsufficientMemory : "InsufficientMemory",
  Interrupted : "Interrupted",
  InvalidConfig : "InvalidConfig",
  InvalidEndpoint : "InvalidEndpoint",
  InvalidParam : "InvalidParam",
  IoCancelled : "IoCancelled",
  IoControlMessage : "IoControlMessage",
  IoEndpointGlobalCancelRedo : "IoEndpointGlobalCancelRedo",
  IoSyncFailed : "IoSyncFailed",
  IoTimedOut : "IoTimedOut",
  MonoApiError : "MonoApiError",
  None : "None",
  NotConnected : "NotConnected",
  NotSupported : "NotSupported",
  Ok : "Ok",
  Overflow : "Overflow",
  PipeError : "PipeError",
  ReadFailed : "ReadFailed",
  ReceiveThreadTerminated : "ReceiveThreadTerminated",
  ResourceBusy : "ResourceBusy",
  SendNotificationFailure : "SendNotificationFailure",
  SetDeviceKeyValueFailed : "SetDeviceKeyValueFailed",
  Success : "Success",
  UnknownError : "UnknownError",
  UserAborted : "UserAborted",
  Win32Error : "Win32Error",
  WriteFailed : "WriteFailed"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DeviceErrorEventCode;
}
