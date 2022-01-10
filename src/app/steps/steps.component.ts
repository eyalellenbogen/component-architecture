import { Component, ContentChildren, OnInit, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { ITemplatedTimelineItem, ITimelineItem } from '../components/types';

@Component({
  selector: 'app-step',
  template: '',
})
export class StepsComponent implements OnInit {
  public data1: ITimelineItem[] = [];
  public data2: ITemplatedTimelineItem[] = [];

  @ViewChild('customTemplate', { static: true }) private customTemplate!: TemplateRef<unknown>;

  ngOnInit() {
    this.populateData1();
    this.populateData2();
  }

  private populateData1() {
    this.data1 = [
      { title: 'This is a title1', content: 'hi' },
      { title: 'This is a title2', content: 'hi' },
      { title: 'This is a title3', content: 'hi' },
      { title: 'This is a title4', content: 'hi' },
      { title: 'This is a title5', content: 'hi' },
    ];
  }

  private populateData2() {
    this.data2 = [...this.data1];
    this.data2[3] = {
      title: 'template!',
      content: this.customTemplate,
    };
  }
}
