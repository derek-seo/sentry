import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sentry';

  sendError() {
    const a: any = {};
    const f = (a: any) => a.b;
    f(a.b.c);
  }
}
