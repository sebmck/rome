/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DiagnosticsPrinterFlags} from '@romejs/cli-diagnostics';
import {Platform} from './platform';
import {DEFAULT_PRINTER_FLAGS} from '@romejs/cli-diagnostics';
import {AbsoluteFilePath, CWD_PATH} from '@romejs/path';

export const DEFAULT_CLIENT_FLAGS: ClientFlags = {
  clientName: 'unknown',
  cwd: CWD_PATH,
  silent: false,
  verbose: false,
};

export const DEFAULT_CLIENT_REQUEST_FLAGS: ClientRequestFlags = {
  collectMarkers: false,

  benchmark: false,
  benchmarkIterations: 10,

  watch: false,
  resolverPlatform: undefined,
  resolverScale: undefined,
  resolverMocks: false,
  ...DEFAULT_PRINTER_FLAGS,
};

export type ClientRequestFlags =
  & DiagnosticsPrinterFlags
  & {
    watch: boolean;

    // Debugging
    collectMarkers: boolean;
    benchmark: boolean;
    benchmarkIterations: number;

    // Bundler flags
    resolverPlatform: undefined | Platform;
    resolverScale: undefined | number;
    resolverMocks: boolean;
  };

export type ClientFlags = {
  clientName: string;
  cwd: AbsoluteFilePath;
  silent: boolean;
  verbose: boolean;
};
