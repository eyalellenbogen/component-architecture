import { Component, OnInit } from '@angular/core';
import { ITimelineItem } from '../components/types';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  public data: ITimelineItem[] = [
    { title: 'Captain America', content: '2011' },
    { title: 'Captain Marvel', content: '2019' },
    { title: 'Iron Man', content: '2008' },
    { title: 'Iron Man 2', content: '2010' },
    { title: 'The Incredible Hulk', content: '2008' },
    { title: 'Thor', content: '2011' },
    { title: 'The Avengers', content: '2012' },
  ];
}
