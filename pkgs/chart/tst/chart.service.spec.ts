/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { TestBed, inject } from '@angular/core/testing';

import { ChartModule } from '../src/chart.module';
import { ChartService } from '../src/chart.service';

describe('ChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartModule],
      providers: [ChartService]
    });
  });

  it('should be created', inject([ChartService], (service: ChartService) => {
    expect(service).toBeTruthy();
  }));
});
