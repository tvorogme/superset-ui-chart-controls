"use strict";

exports.__esModule = true;
exports.dnd_granularity_sqla = exports.dnd_secondary_metric = exports.dnd_y = exports.dnd_x = exports.dnd_size = exports.dnd_sort_by = exports.dnd_adhoc_metric_2 = exports.dnd_adhoc_metric = exports.dnd_adhoc_metrics = exports.dnd_adhoc_filters = exports.dndEntity = exports.dndSeries = exports.dndColumnsControl = exports.dndGroupByControl = void 0;

var _core = require("@superset-ui/core");

var _constants = require("../constants");

/* eslint-disable camelcase */

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
const dndGroupByControl = {
  type: 'DndColumnSelect',
  label: (0, _core.t)('Group by'),
  default: [],
  description: (0, _core.t)('One or many columns to group by'),

  mapStateToProps(state, {
    includeTime
  }) {
    const newState = {};

    if (state.datasource) {
      const options = state.datasource.columns.filter(c => c.groupby);

      if (includeTime) {
        options.unshift(_constants.TIME_COLUMN_OPTION);
      }

      newState.options = Object.fromEntries(options.map(option => [option.column_name, option]));
      newState.savedMetrics = state.datasource.metrics || [];
    }

    return newState;
  }

};
exports.dndGroupByControl = dndGroupByControl;
const dndColumnsControl = { ...dndGroupByControl,
  label: (0, _core.t)('Columns'),
  description: (0, _core.t)('One or many columns to pivot as columns')
};
exports.dndColumnsControl = dndColumnsControl;
const dndSeries = { ...dndGroupByControl,
  label: (0, _core.t)('Series'),
  multi: false,
  default: null,
  description: (0, _core.t)('Defines the grouping of entities. ' + 'Each series is shown as a specific color on the chart and ' + 'has a legend toggle')
};
exports.dndSeries = dndSeries;
const dndEntity = { ...dndGroupByControl,
  label: (0, _core.t)('Entity'),
  default: null,
  multi: false,
  validators: [_core.validateNonEmpty],
  description: (0, _core.t)('This defines the element to be plotted on the chart')
};
exports.dndEntity = dndEntity;
const dnd_adhoc_filters = {
  type: 'DndFilterSelect',
  label: (0, _core.t)('Filters'),
  default: null,
  description: '',
  mapStateToProps: ({
    datasource,
    form_data
  }) => ({
    columns: (datasource == null ? void 0 : datasource.columns.filter(c => c.filterable)) || [],
    savedMetrics: (datasource == null ? void 0 : datasource.metrics) || [],
    // current active adhoc metrics
    selectedMetrics: form_data.metrics || (form_data.metric ? [form_data.metric] : []),
    datasource
  }),
  provideFormDataToProps: true
};
exports.dnd_adhoc_filters = dnd_adhoc_filters;
const dnd_adhoc_metrics = {
  type: 'DndMetricSelect',
  multi: true,
  label: (0, _core.t)('Metrics'),
  validators: [_core.validateNonEmpty],
  mapStateToProps: ({
    datasource
  }) => ({
    columns: datasource ? datasource.columns : [],
    savedMetrics: datasource ? datasource.metrics : [],
    datasourceType: datasource == null ? void 0 : datasource.type
  }),
  description: (0, _core.t)('One or many metrics to display')
};
exports.dnd_adhoc_metrics = dnd_adhoc_metrics;
const dnd_adhoc_metric = { ...dnd_adhoc_metrics,
  multi: false,
  label: (0, _core.t)('Metric'),
  description: (0, _core.t)('Metric')
};
exports.dnd_adhoc_metric = dnd_adhoc_metric;
const dnd_adhoc_metric_2 = { ...dnd_adhoc_metric,
  label: (0, _core.t)('Right Axis Metric'),
  description: (0, _core.t)('Choose a metric for right axis')
};
exports.dnd_adhoc_metric_2 = dnd_adhoc_metric_2;
const dnd_sort_by = {
  type: 'DndMetricSelect',
  label: (0, _core.t)('Sort by'),
  default: null,
  description: (0, _core.t)('Metric used to define the top series'),
  mapStateToProps: ({
    datasource
  }) => ({
    columns: (datasource == null ? void 0 : datasource.columns) || [],
    savedMetrics: (datasource == null ? void 0 : datasource.metrics) || [],
    datasourceType: datasource == null ? void 0 : datasource.type
  })
};
exports.dnd_sort_by = dnd_sort_by;
const dnd_size = { ...dnd_adhoc_metric,
  label: (0, _core.t)('Bubble Size'),
  description: (0, _core.t)('Metric used to calculate bubble size')
};
exports.dnd_size = dnd_size;
const dnd_x = { ...dnd_adhoc_metric,
  label: (0, _core.t)('X Axis'),
  description: (0, _core.t)('Metric assigned to the [X] axis')
};
exports.dnd_x = dnd_x;
const dnd_y = { ...dnd_adhoc_metric,
  label: (0, _core.t)('Y Axis'),
  description: (0, _core.t)('Metric assigned to the [Y] axis')
};
exports.dnd_y = dnd_y;
const dnd_secondary_metric = { ...dnd_adhoc_metric,
  label: (0, _core.t)('Color Metric'),
  validators: [],
  description: (0, _core.t)('A metric to use for color')
};
exports.dnd_secondary_metric = dnd_secondary_metric;
const dnd_granularity_sqla = { ...dndSeries,
  label: _constants.TIME_FILTER_LABELS.granularity_sqla,
  description: (0, _core.t)('The time column for the visualization. Note that you ' + 'can define arbitrary expression that return a DATETIME ' + 'column in the table. Also note that the ' + 'filter below is applied against this column or ' + 'expression'),
  canDelete: false,
  ghostButtonText: (0, _core.t)((0, _core.isFeatureEnabled)(_core.FeatureFlag.ENABLE_DND_WITH_CLICK_UX) ? 'Drop a temporal column here or click' : 'Drop temporal column here'),
  mapStateToProps: ({
    datasource
  }) => {
    var _datasource$columns$f, _temporalColumns$;

    const temporalColumns = (_datasource$columns$f = datasource == null ? void 0 : datasource.columns.filter(c => c.is_dttm)) != null ? _datasource$columns$f : [];
    const options = Object.fromEntries(temporalColumns.map(option => [option.column_name, option]));
    return {
      options,
      default: (datasource == null ? void 0 : datasource.main_dttm_col) || ((_temporalColumns$ = temporalColumns[0]) == null ? void 0 : _temporalColumns$.column_name) || null
    };
  }
};
exports.dnd_granularity_sqla = dnd_granularity_sqla;