/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { NgModule } from '@angular/core';
import { ChartService } from './chart.service';
import { BaseChartComponent } from './base-chart/base-chart.component';

@NgModule({
  declarations: [BaseChartComponent],
  exports: [BaseChartComponent]
})
export class ChartModule {}
