import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent implements OnInit {
  @Input()
  public num: number = 0;

  public someText = Math.random().toString(36).substr(2, 9);

  public size: number = 0;

  public getNumber() {
    // console.log('here');
    return this.num * 5;
  }

  public doWork() {
    this.num++;
    // if (this.num % 2 === 0) {
    // this.cdr.detectChanges();
    // }
  }

  constructor(
    // private cdr: ChangeDetectorRef,
    private el: ElementRef<HTMLElement>,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    // this.measure();
    // this.cdr.detach();
    // this.cdr.detectChanges();
    // this.el.nativeElement.addEventListener('click', () => {
    //   this.doWork();
    //   this.cdr.markForCheck();
    // });
  }

  private measure() {
    const el = document.createElement('div');
    el.style.fontSize = '40px';
    el.innerText = this.someText;
    document.body.appendChild(el);
    this.size = el.getBoundingClientRect().width;
    document.body.removeChild(el);
  }
}
