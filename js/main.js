"use strict";

var siteUrl = window.location.protocol + "//" + window.location.hostname;

(function ($, undefined) {
  jQuery(document).ready(function () {
    //
    console.log("Start Site jQuery, current Link:", siteUrl); // * SimpleBar Init
    // var SB = new SimpleBar($(".i-body")[0]);
    // = ./jqe/file_name
    // = ./jqe/file_name
    // = ./jqe/file_name
    // = ./jqe/file_name

    console.log("End Site jQuery"); //
  });
})(jQuery);

function throttle(func, ms) {
  var isThrottled = false,
      savedArgs,
      savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
/**
 * @param json try : return JSON.parse(json)
 * @param rv catch : return !rv ? null : rv
 */


function saveJSONParse(json, rv) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return !rv ? null : rv;
  }
}

function randID() {
  return "_" + Math.random().toString(36).substr(5, 15);
}