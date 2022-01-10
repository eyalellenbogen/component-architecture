import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'timeline-item-title',
  template: '<ng-content></ng-content>',
})
export class TimelineItemTitleComponent {}

@Component({
  selector: 'timeline-item-content',
  template: '<ng-content></ng-content>',
})
export class TimelineItemContentComponent {}

@Component({
  selector: 'timeline-item',
  template: `
    <ng-template #title><ng-content select="timeline-item-title"></ng-content></ng-template>
    <ng-template #content><ng-content select="timeline-item-content"></ng-content></ng-template>
  `,
})
export class TimelineItemComponent {
  @ViewChild('title') public title!: TemplateRef<unknown>;
  @ViewChild('content') public content!: TemplateRef<unknown>;
}

@Component({
  selector: 'app-timeline4',
  templateUrl: './timeline4.component.html',
  styleUrls: ['../timeline.scss'],
})
export class Timeline4Component {
  @ContentChildren(TimelineItemComponent) public items: QueryList<TimelineItemComponent> | undefined;
}
