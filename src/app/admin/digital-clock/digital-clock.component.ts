import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  constructor() {
    this.timeshow = updatetime();
    this.dateshow = updatedate();
  }

  timeshow: string;
  dateshow: string;
  private timer: any;

  gotologin1() {
    gotoLogin();
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.timeshow = updatetime();
      this.dateshow = updatedate();
    }, 1000);
  }
}

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function updatetime() {
  const cd = new Date();
  return (zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2));
}

function updatedate() {
  const cd = new Date();
  return (zeroPadding(cd.getFullYear(), 4) + '-'
    + zeroPadding(cd.getMonth() + 1, 2) + '-'
    + zeroPadding(cd.getDate(), 2) + ' '
    + week[cd.getDay()]);
}

function zeroPadding(num, digit) {
  let zero = '';
  for (let i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}

// function updatetime() {
//   const cd = new Date();
//   this.timeshow = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
//   this.dateshow = zeroPadding(cd.getFullYear(), 4) + '-'
//     + zeroPadding(cd.getMonth() + 1, 2) + '-'
//     + zeroPadding(cd.getDate(), 2) + ' '
//     + week[cd.getDay()];
// }

function gotoLogin() {
  this.router.navigate(['/login']);
}
