"use strict";

exports.__esModule = true;
exports.boxplotOperator = void 0;

var _core = require("@superset-ui/core");

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
 * specific language governing permissions and limitationsxw
 * under the License.
 */
const PERCENTILE_REGEX = /(\d+)\/(\d+) percentiles/;

const boxplotOperator = (formData, queryObject) => {
  const {
    whiskerOptions
  } = formData;

  if (whiskerOptions) {
    let whiskerType;
    let percentiles;
    const percentileMatch = PERCENTILE_REGEX.exec(whiskerOptions);

    if (whiskerOptions === 'Tukey' || !whiskerOptions) {
      whiskerType = 'tukey';
    } else if (whiskerOptions === 'Min/max (no outliers)') {
      whiskerType = 'min/max';
    } else if (percentileMatch) {
      whiskerType = 'percentile';
      percentiles = [parseInt(percentileMatch[1], 10), parseInt(percentileMatch[2], 10)];
    } else {
      throw new Error(`Unsupported whisker type: ${whiskerOptions}`);
    }

    return {
      operation: 'boxplot',
      options: {
        whisker_type: whiskerType,
        percentiles,
        groupby: (0, _core.ensureIsArray)(queryObject.groupby),
        metrics: (0, _core.ensureIsArray)(queryObject.metrics).map(_core.getMetricLabel)
      }
    };
  }

  return undefined;
};

exports.boxplotOperator = boxplotOperator;