"use strict";

exports.__esModule = true;
exports.default = exports.MULTIPLE_VALUE_COMPARATORS = exports.COMPARATOR = exports.ControlFormItemSpec = exports.Metric = void 0;

var _core = require("@superset-ui/core");

exports.Metric = _core.Metric;

var _ControlForm = require("./components/ControlForm");

exports.ControlFormItemSpec = _ControlForm.ControlFormItemSpec;
// Ref:
//  - superset-frontend/src/explore/components/ConditionalFormattingControl.tsx
let COMPARATOR;
exports.COMPARATOR = COMPARATOR;

(function (COMPARATOR) {
  COMPARATOR["NONE"] = "None";
  COMPARATOR["GREATER_THAN"] = ">";
  COMPARATOR["LESS_THAN"] = "<";
  COMPARATOR["GREATER_OR_EQUAL"] = "\u2265";
  COMPARATOR["LESS_OR_EQUAL"] = "\u2264";
  COMPARATOR["EQUAL"] = "=";
  COMPARATOR["NOT_EQUAL"] = "\u2260";
  COMPARATOR["BETWEEN"] = "< x <";
  COMPARATOR["BETWEEN_OR_EQUAL"] = "\u2264 x \u2264";
  COMPARATOR["BETWEEN_OR_LEFT_EQUAL"] = "\u2264 x <";
  COMPARATOR["BETWEEN_OR_RIGHT_EQUAL"] = "< x \u2264";
})(COMPARATOR || (exports.COMPARATOR = COMPARATOR = {}));

const MULTIPLE_VALUE_COMPARATORS = [COMPARATOR.BETWEEN, COMPARATOR.BETWEEN_OR_EQUAL, COMPARATOR.BETWEEN_OR_LEFT_EQUAL, COMPARATOR.BETWEEN_OR_RIGHT_EQUAL];
exports.MULTIPLE_VALUE_COMPARATORS = MULTIPLE_VALUE_COMPARATORS;
var _default = {};
exports.default = _default;