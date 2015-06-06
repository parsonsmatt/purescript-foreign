/* global exports */
"use strict";

// module Data.Foreign

exports.parseJSONImpl = function(left, right, str) {
  try {
    return right(JSON.parse(str));
  } catch (e) {
    return left(e.toString());
  }
};

exports.toForeign = function(value) {
  return value;
};

exports.unsafeFromForeign = function(value) {
  return value;
};

exports.typeOf = function(value) {
  return typeof value;
};

exports.tagOf = function(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
};

exports isNull = function(value) {
  return value === null;
};

exports isUndefined = function(value) {
  return value === undefined;
};

exports.isArray = Array.isArray || function(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};