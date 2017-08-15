import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul class="todo-list">
      <app-item></app-item>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
