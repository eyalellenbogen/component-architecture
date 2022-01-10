import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SomeNumberPipe } from './some-number.pipe';
import { HelloComponent } from './hello/hello.component';
import { IntroComponent } from './intro/intro.component';
import { Content1Component } from './intro/content1/content1.component';
import { Content2Component } from './intro/content2/content2.component';
import { DemoComponent } from './demo/demo.component';
import { Timeline1Component } from './components/timeline1/timeline1.component';
import { Timeline2Component } from './components/timeline2/timeline2.component';
import { Timeline3Component } from './components/timeline3/timeline3.component';
import {
  Timeline4Component,
  TimelineItemComponent,
  TimelineItemTitleComponent,
  TimelineItemContentComponent,
} from './components/timeline4/timeline4.component';
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { Step4Component } from './steps/step4/step4.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    SomeNumberPipe,
    HelloComponent,
    IntroComponent,
    Content1Component,
    Content2Component,
    DemoComponent,
    Timeline1Component,
    Timeline2Component,
    Timeline3Component,
    Timeline4Component,
    TimelineItemComponent,
    TimelineItemTitleComponent,
    TimelineItemContentComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    ThanksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
