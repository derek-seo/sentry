import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sentry';
  a: any = {};

  constructor() {
    const f = (a: any) => a.b;
    f(this.a.b.c);
  }
  
  sendError() {
    const f = (a: any) => a.b;
    f(this.a.b.c);
  }
}
