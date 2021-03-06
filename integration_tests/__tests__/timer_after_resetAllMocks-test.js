/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails oncall+jsinfra
 */
'use strict';

const runJest = require('../runJest');
const skipOnWindows = require('skipOnWindows');

skipOnWindows.suite();

test('run timers after resetAllMocks test', () => {
  const result = runJest('timer_after_resetAllMocks');
  expect(result.status).toBe(0);
});
