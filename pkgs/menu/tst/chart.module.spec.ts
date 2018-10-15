/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { ChartModule } from '../src/chart.module';

describe('ChartModule', () => {
  let chartModule: ChartModule;

  beforeEach(() => {
    chartModule = new ChartModule();
  });

  it('should create an instance', () => {
    expect(chartModule).toBeTruthy();
  });
});
