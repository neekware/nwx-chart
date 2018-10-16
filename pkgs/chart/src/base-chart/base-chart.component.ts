import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewContainerRef
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'nwx-base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationState', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms 100ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class BaseChartComponent implements OnInit {
  @Input()
  title = null;
  @Input()
  width;
  @Input()
  height;
  @Input()
  data: any;

  @Input()
  animate = true;

  constructor(private vcRef: ViewContainerRef) {}

  ngOnInit() {}
}
