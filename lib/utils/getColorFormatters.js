"use strict";

exports.__esModule = true;
exports.getColorFormatters = exports.getColorFunction = exports.getOpacity = exports.rgbToRgba = exports.round = void 0;

var _types2 = require("../types");

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
const round = (num, precision = 0) => Number(`${Math.round(Number(`${num}e+${precision}`))}e-${precision}`);

exports.round = round;

const rgbToRgba = (rgb, alpha) => rgb.replace(/rgb/i, 'rgba').replace(/\)/i, `,${alpha})`);

exports.rgbToRgba = rgbToRgba;
const MIN_OPACITY_BOUNDED = 0.05;
const MIN_OPACITY_UNBOUNDED = 0;
const MAX_OPACITY = 1;

const getOpacity = (value, cutoffPoint, extremeValue, minOpacity = MIN_OPACITY_BOUNDED, maxOpacity = MAX_OPACITY, isInvert = false) => extremeValue === cutoffPoint ? maxOpacity : round(Math.abs((maxOpacity - minOpacity) / (extremeValue - cutoffPoint) * (isInvert ? extremeValue - value : value - cutoffPoint)) + minOpacity, 2);

exports.getOpacity = getOpacity;

const getColorFunction = ({
  operator,
  targetValue,
  targetValueLeft,
  targetValueRight,
  inverseMode,
  colorScheme
}, columnValues) => {
  let minOpacity = MIN_OPACITY_BOUNDED;
  const maxOpacity = MAX_OPACITY;
  let comparatorFunction;

  if (operator === undefined || colorScheme === undefined) {
    return () => undefined;
  }

  if (_types2.MULTIPLE_VALUE_COMPARATORS.includes(operator) && (targetValueLeft === undefined || targetValueRight === undefined)) {
    return () => undefined;
  }

  if (operator !== _types2.COMPARATOR.NONE && !_types2.MULTIPLE_VALUE_COMPARATORS.includes(operator) && targetValue === undefined) {
    return () => undefined;
  }

  switch (operator) {
    case _types2.COMPARATOR.NONE:
      minOpacity = MIN_OPACITY_UNBOUNDED;

      comparatorFunction = (value, allValues) => {
        const cutoffValue = Math.min(...allValues);
        const extremeValue = Math.max(...allValues);
        return value >= cutoffValue && value <= extremeValue ? {
          cutoffValue,
          extremeValue
        } : false;
      };

      break;

    case _types2.COMPARATOR.GREATER_THAN:
      comparatorFunction = (value, allValues) => value > targetValue ? {
        cutoffValue: targetValue,
        extremeValue: Math.max(...allValues)
      } : false;

      break;

    case _types2.COMPARATOR.LESS_THAN:
      comparatorFunction = (value, allValues) => value < targetValue ? {
        cutoffValue: targetValue,
        extremeValue: Math.min(...allValues)
      } : false;

      break;

    case _types2.COMPARATOR.GREATER_OR_EQUAL:
      comparatorFunction = (value, allValues) => value >= targetValue ? {
        cutoffValue: targetValue,
        extremeValue: Math.max(...allValues)
      } : false;

      break;

    case _types2.COMPARATOR.LESS_OR_EQUAL:
      comparatorFunction = (value, allValues) => value <= targetValue ? {
        cutoffValue: targetValue,
        extremeValue: Math.min(...allValues)
      } : false;

      break;

    case _types2.COMPARATOR.EQUAL:
      comparatorFunction = value => value === targetValue ? {
        cutoffValue: targetValue,
        extremeValue: targetValue
      } : false;

      break;

    case _types2.COMPARATOR.NOT_EQUAL:
      comparatorFunction = (value, allValues) => {
        if (value === targetValue) {
          return false;
        }

        const max = Math.max(...allValues);
        const min = Math.min(...allValues);
        return {
          cutoffValue: targetValue,
          extremeValue: Math.abs(targetValue - min) > Math.abs(max - targetValue) ? min : max
        };
      };

      break;

    case _types2.COMPARATOR.BETWEEN:
      comparatorFunction = value => value > targetValueLeft && value < targetValueRight ? {
        cutoffValue: targetValueLeft,
        extremeValue: targetValueRight
      } : false;

      break;

    case _types2.COMPARATOR.BETWEEN_OR_EQUAL:
      comparatorFunction = value => value >= targetValueLeft && value <= targetValueRight ? {
        cutoffValue: targetValueLeft,
        extremeValue: targetValueRight
      } : false;

      break;

    case _types2.COMPARATOR.BETWEEN_OR_LEFT_EQUAL:
      comparatorFunction = value => value >= targetValueLeft && value < targetValueRight ? {
        cutoffValue: targetValueLeft,
        extremeValue: targetValueRight
      } : false;

      break;

    case _types2.COMPARATOR.BETWEEN_OR_RIGHT_EQUAL:
      comparatorFunction = value => value > targetValueLeft && value <= targetValueRight ? {
        cutoffValue: targetValueLeft,
        extremeValue: targetValueRight
      } : false;

      break;

    default:
      comparatorFunction = () => false;

      break;
  }

  return value => {
    const compareResult = comparatorFunction(value, columnValues);
    if (compareResult === false) return undefined;
    const {
      cutoffValue,
      extremeValue
    } = compareResult;
    return rgbToRgba(colorScheme, getOpacity(value, cutoffValue, extremeValue, minOpacity, maxOpacity, inverseMode === 'Inversed'));
  };
};

exports.getColorFunction = getColorFunction;

const getColorFormatters = (columnConfig, data) => {
  var _columnConfig$reduce;

  return (_columnConfig$reduce = columnConfig == null ? void 0 : columnConfig.reduce((acc, config) => {
    if ((config == null ? void 0 : config.column) !== undefined && ((config == null ? void 0 : config.operator) === _types2.COMPARATOR.NONE || (config == null ? void 0 : config.operator) !== undefined && (_types2.MULTIPLE_VALUE_COMPARATORS.includes(config == null ? void 0 : config.operator) ? (config == null ? void 0 : config.targetValueLeft) !== undefined && (config == null ? void 0 : config.targetValueRight) !== undefined : (config == null ? void 0 : config.targetValue) !== undefined))) {
      acc.push({
        column: config == null ? void 0 : config.column,
        getColorFromValue: getColorFunction(config, data.map(row => row[config.column]))
      });
    }

    return acc;
  }, [])) != null ? _columnConfig$reduce : [];
};

exports.getColorFormatters = getColorFormatters;