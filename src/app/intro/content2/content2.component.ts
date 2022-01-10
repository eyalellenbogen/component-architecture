import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['../content.scss'],
})
export class Content2Component {
  @Input() template!: TemplateRef<unknown>;
}
