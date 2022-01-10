import { TemplateRef } from '@angular/core';

export interface ITimelineItem {
  title: string;
  content: string;
}

export interface ITemplatedTimelineItem {
  title: string;
  content: string | TemplateRef<unknown>;
}
