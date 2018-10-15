import { Component } from '@angular/core';

import { CfgService, DefaultCfg } from '@nwx/cfg';
import { LogService } from '@nwx/logger';

import { ChartService } from 'pkgs/chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChartService]
})
export class AppComponent {
  title = 'Neekware';
  options = {};
  constructor(
    public cfg: CfgService,
    public log: LogService,
    public chart: ChartService
  ) {
    this.title = this.cfg.options.appName;
    this.log.info('AppComponent loaded ...');
  }
}
