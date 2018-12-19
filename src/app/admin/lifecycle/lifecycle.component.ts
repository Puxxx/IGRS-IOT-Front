import {
  Component,
  OnInit,
  OnChanges,
  // DoCheck,
  AfterContentInit,
  // AfterContentChecked,
  AfterViewInit,
  // AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input
} from '@angular/core';

let logIndex: number = 1;

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit,
  OnChanges,
  // DoCheck,
  AfterContentInit,
  // AfterContentChecked,
  AfterViewInit,
  // AfterViewChecked,
  OnDestroy {
  message: string = '初始化消息';
  greeting: string = 'nihao';

  @Input()
  user: { name: string };

  @Input()
  iconUrl: string;

  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }

  constructor() {
    this.logIt('name属性在constructor里的值是：' + name);
  }

  ngOnChanges(changes: SimpleChanges): void {

    let name = changes['name'].currentValue;
    this.logIt('name属性在ngOnChanges里的值是：' + name);
    console.log(JSON.stringify(changes, null, 2));

  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

  // ngDoCheck(): void {
  //   this.logIt('ngDoCheck');
  // }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }

  // ngAfterContentChecked(): void {
  //   this.logIt('ngAfterContentChecked');
  // }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }

  // ngAfterViewChecked(): void {
  //   this.logIt('ngAfterViewChecked');
  // }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }

}
