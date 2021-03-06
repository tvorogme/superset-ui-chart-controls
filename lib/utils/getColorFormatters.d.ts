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
import { DataRecord } from '@superset-ui/core';
import { ColorFormatters, ConditionalFormattingConfig } from '../types';
export declare const round: (num: number, precision?: number) => number;
export declare const rgbToRgba: (rgb: string, alpha: number) => string;
export declare const getOpacity: (value: number, cutoffPoint: number, extremeValue: number, minOpacity?: number, maxOpacity?: number, isInvert?: boolean) => number;
export declare const getColorFunction: ({ operator, targetValue, targetValueLeft, targetValueRight, inverseMode, colorScheme, }: ConditionalFormattingConfig, columnValues: number[]) => (value: number) => string | undefined;
export declare const getColorFormatters: (columnConfig: ConditionalFormattingConfig[] | undefined, data: DataRecord[]) => ColorFormatters;
//# sourceMappingURL=getColorFormatters.d.ts.map