"use strict";

exports.__esModule = true;
exports.DEFAULT_CONFIG_FORM_LAYOUT = exports.SHARED_COLUMN_CONFIG_PROPS = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _FaAlignLeft = require("@react-icons/all-files/fa/FaAlignLeft");

var _FaAlignRight = require("@react-icons/all-files/fa/FaAlignRight");

var _FaAlignCenter = require("@react-icons/all-files/fa/FaAlignCenter");

var _utils = require("../../../utils");

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const emitTarget = {
  controlType: 'Input',
  label: (0, _core.t)('Emit Target'),
  description: (0, _core.t)('If you wish to specify a different target column than the original column, it can be entered here'),
  defaultValue: '',
  debounceDelay: 500,
  validators: undefined
};
const d3NumberFormat = {
  controlType: 'Select',
  label: (0, _core.t)('D3 format'),
  description: _utils.D3_FORMAT_DOCS,
  options: _utils.D3_FORMAT_OPTIONS,
  defaultValue: _utils.D3_FORMAT_OPTIONS[0][0],
  creatable: true,
  minWidth: '14em',
  debounceDelay: 500
};
const d3TimeFormat = {
  controlType: 'Select',
  label: (0, _core.t)('D3 format'),
  description: _utils.D3_TIME_FORMAT_DOCS,
  options: _utils.D3_TIME_FORMAT_OPTIONS,
  defaultValue: _utils.D3_TIME_FORMAT_OPTIONS[0][0],
  creatable: true,
  minWidth: '10em',
  debounceDelay: 500
};
const fractionDigits = {
  controlType: 'Slider',
  label: (0, _core.t)('Fraction digits'),
  description: (0, _core.t)('Number of decimal digits to round numbers to'),
  min: 0,
  step: 1,
  max: 100,
  defaultValue: 100
};
const columnWidth = {
  controlType: 'InputNumber',
  label: (0, _core.t)('Min Width'),
  description: (0, _core.t)("Default minimal column width in pixels, actual width may still be larger than this if other columns don't need much space"),
  width: 120,
  placeholder: 'auto',
  debounceDelay: 400,
  validators: [_core.validateNumber]
};
const horizontalAlign = {
  controlType: 'RadioButtonControl',
  label: (0, _core.t)('Text align'),
  description: (0, _core.t)('Horizontal alignment'),
  width: 130,
  debounceDelay: 50,
  defaultValue: 'left',
  options: [['left', (0, _react2.jsx)(_FaAlignLeft.FaAlignLeft, {
    title: (0, _core.t)('Left')
  })], ['center', (0, _react2.jsx)(_FaAlignCenter.FaAlignCenter, {
    title: (0, _core.t)('Center')
  })], ['right', (0, _react2.jsx)(_FaAlignRight.FaAlignRight, {
    title: (0, _core.t)('Right')
  })]]
};
const showCellBars = {
  controlType: 'Checkbox',
  label: (0, _core.t)('Show cell bars'),
  description: (0, _core.t)('Whether to display a bar chart background in table columns'),
  defaultValue: true,
  debounceDelay: 200
};
const alignPositiveNegative = {
  controlType: 'Checkbox',
  label: (0, _core.t)('Align +/-'),
  description: (0, _core.t)('Whether to align positive and negative values in cell bar chart at 0'),
  defaultValue: false,
  debounceDelay: 200
};
const colorPositiveNegative = {
  controlType: 'Checkbox',
  label: (0, _core.t)('Color +/-'),
  description: (0, _core.t)('Whether to colorize numeric values by if they are positive or negative'),
  defaultValue: false,
  debounceDelay: 200
};
/**
 * All configurable column formatting properties.
 */

const SHARED_COLUMN_CONFIG_PROPS = {
  d3NumberFormat,
  emitTarget,
  d3SmallNumberFormat: { ...d3NumberFormat,
    label: (0, _core.t)('Small number format'),
    description: (0, _core.t)('D3 number format for numbers between -1.0 and 1.0, ' + 'useful when you want to have different siginificant digits for small and large numbers')
  },
  d3TimeFormat,
  fractionDigits,
  columnWidth,
  horizontalAlign,
  showCellBars,
  alignPositiveNegative,
  colorPositiveNegative
};
exports.SHARED_COLUMN_CONFIG_PROPS = SHARED_COLUMN_CONFIG_PROPS;
const DEFAULT_CONFIG_FORM_LAYOUT = {
  [_core.GenericDataType.STRING]: [['columnWidth', {
    name: 'horizontalAlign',
    override: {
      defaultValue: 'left'
    }
  }]],
  [_core.GenericDataType.NUMERIC]: [['columnWidth', {
    name: 'horizontalAlign',
    override: {
      defaultValue: 'right'
    }
  }], ['d3NumberFormat'], ['d3SmallNumberFormat'], ['alignPositiveNegative', 'colorPositiveNegative'], ['showCellBars']],
  [_core.GenericDataType.TEMPORAL]: [['columnWidth', {
    name: 'horizontalAlign',
    override: {
      defaultValue: 'left'
    }
  }], ['d3TimeFormat']],
  [_core.GenericDataType.BOOLEAN]: [['columnWidth', {
    name: 'horizontalAlign',
    override: {
      defaultValue: 'left'
    }
  }]]
};
exports.DEFAULT_CONFIG_FORM_LAYOUT = DEFAULT_CONFIG_FORM_LAYOUT;