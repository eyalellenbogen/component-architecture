import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITimelineItem } from '../types';

@Component({
  selector: 'app-timeline1',
  templateUrl: './timeline1.component.html',
  styleUrls: ['../timeline.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline1Component {
  @Input() items: ITimelineItem[] = [];
}
