import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-timeline3',
  templateUrl: './timeline3.component.html',
  styleUrls: ['../timeline.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline3Component<T = unknown> {
  @Input() items: T[] = [];

  @ContentChild('title')
  public titleTemplate!: TemplateRef<unknown>;

  @ContentChild('content')
  public contentTemplate!: TemplateRef<unknown>;
}
