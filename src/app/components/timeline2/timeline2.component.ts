import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ITemplatedTimelineItem, ITimelineItem } from '../types';

@Component({
  selector: 'app-timeline2',
  templateUrl: './timeline2.component.html',
  styleUrls: ['../timeline.scss'],
})
export class Timeline2Component {
  @Input() items: ITemplatedTimelineItem[] = [];
  @Output() selected = new EventEmitter<ITimelineItem>();

  @ViewChild('contentTemplate', { static: true }) private contentTemplate!: TemplateRef<unknown>;

  getTemplate(content: string | TemplateRef<unknown> | undefined): TemplateRef<unknown> {
    return content && content instanceof TemplateRef ? content : this.contentTemplate;
  }


}
