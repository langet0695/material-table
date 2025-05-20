"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.selectionMaxWidth = exports.rowActions = exports.reducePercentsInCalc = exports.elementSize = exports.baseIconSize = exports.actionsColumnWidth = void 0;
var elementSize = (exports.elementSize = function elementSize(props) {
  return props.options.padding === "default" ? "medium" : "small";
});
var baseIconSize = (exports.baseIconSize = function baseIconSize(props) {
  return elementSize(props) === "medium" ? 48 : 32;
});
var rowActions = (exports.rowActions = function rowActions(props) {
  return props.actions.filter(function (a) {
    return a.position === "row" || typeof a === "function";
  });
});
var actionsColumnWidth = (exports.actionsColumnWidth = function actionsColumnWidth(
  props
) {
  return rowActions(props).length * baseIconSize(props);
});
var selectionMaxWidth = (exports.selectionMaxWidth = function selectionMaxWidth(
  props,
  maxTreeLevel
) {
  return baseIconSize(props) + 9 * maxTreeLevel;
});
var reducePercentsInCalc = (exports.reducePercentsInCalc = function reducePercentsInCalc(
  calc,
  fullValue
) {
  var captureGroups = calc.match(/(\d*)%/);
  if (captureGroups && captureGroups.length > 1) {
    var percentage = captureGroups[1];
    return calc.replace(
      /\d*%/,
      "".concat(fullValue * (percentage / 100), "px")
    );
  }
  return calc.replace(/\d*%/, "".concat(fullValue, "px"));
});
