import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>
    <app-todolist></app-todolist>
  `,
})
export class AppComponent {
  title = 'app';
}
