import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private routes = ['hello', 'demo', 'intro', 'step1', 'step2', 'step3', 'step4', 'thanks'];
  private currentRoute = '';
  constructor(private router: Router) {
    this.router.routerState.snapshot;
    this.router.events.pipe(filter((x) => x instanceof NavigationEnd)).subscribe((ev) => {
      const routerEvent = ev as NavigationEnd;
      this.currentRoute = routerEvent.url.substring(1);
    });
  }
  ngOnInit() {
    document.addEventListener('keydown', (ev) => {
      if (!ev.ctrlKey) {
        return;
      }

      let idx = this.routes.indexOf(this.currentRoute);
      if (ev.key === 'ArrowRight') {
        // do next
        idx++;
        if (idx > this.routes.length - 1) {
          idx = 0;
        }
      }
      if (ev.key === 'ArrowLeft') {
        //do prev
        idx--;
        if (idx < 0) {
          idx = this.routes.length - 1;
        }
      }
      this.router.navigate([this.routes[idx]]);
    });
  }
}
