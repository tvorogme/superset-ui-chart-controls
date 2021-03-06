"use strict";

exports.__esModule = true;
exports.annotations = exports.colorScheme = exports.datasourceAndVizType = exports.legacyRegularTime = exports.legacyTimeseriesTime = void 0;

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
 * specific language governing permissions and limitations
 * under the License.
 */
// A few standard controls sections that are used internally.
// Not recommended for use in third-party plugins.
const baseTimeSection = {
  label: (0, _core.t)('Time'),
  expanded: true,
  description: (0, _core.t)('Time related form attributes')
};
const legacyTimeseriesTime = { ...baseTimeSection,
  controlSetRows: [['granularity'], ['druid_time_origin'], ['granularity_sqla'], ['time_grain_sqla'], ['time_range']]
};
exports.legacyTimeseriesTime = legacyTimeseriesTime;
const legacyRegularTime = { ...baseTimeSection,
  controlSetRows: [['granularity_sqla'], ['time_range']]
};
exports.legacyRegularTime = legacyRegularTime;
const datasourceAndVizType = {
  label: (0, _core.t)('Datasource & Chart Type'),
  expanded: true,
  controlSetRows: [['datasource'], ['viz_type'], [{
    name: 'slice_id',
    config: {
      type: 'HiddenControl',
      label: (0, _core.t)('Chart ID'),
      hidden: true,
      description: (0, _core.t)('The id of the active chart')
    }
  }, {
    name: 'cache_timeout',
    config: {
      type: 'HiddenControl',
      label: (0, _core.t)('Cache Timeout (seconds)'),
      hidden: true,
      description: (0, _core.t)('The number of seconds before expiring the cache')
    }
  }, {
    name: 'url_params',
    config: {
      type: 'HiddenControl',
      label: (0, _core.t)('URL Parameters'),
      hidden: true,
      description: (0, _core.t)('Extra url parameters for use in Jinja templated queries')
    }
  }, {
    name: 'custom_params',
    config: {
      type: 'HiddenControl',
      label: (0, _core.t)('Extra Parameters'),
      hidden: true,
      description: (0, _core.t)('Extra parameters that any plugins can choose to set for use in Jinja templated queries')
    }
  }, {
    name: 'time_range_endpoints',
    config: {
      type: 'HiddenControl',
      label: (0, _core.t)('Time range endpoints'),
      hidden: true,
      description: (0, _core.t)('Time range endpoints (SIP-15)')
    }
  }]]
};
exports.datasourceAndVizType = datasourceAndVizType;
const colorScheme = {
  label: (0, _core.t)('Color Scheme'),
  controlSetRows: [['color_scheme', 'label_colors']]
};
exports.colorScheme = colorScheme;
const annotations = {
  label: (0, _core.t)('Annotations and Layers'),
  tabOverride: 'data',
  expanded: true,
  controlSetRows: [[{
    name: 'annotation_layers',
    config: {
      type: 'AnnotationLayerControl',
      label: '',
      default: [],
      description: (0, _core.t)('Annotation Layers'),
      renderTrigger: true
    }
  }]]
};
exports.annotations = annotations;