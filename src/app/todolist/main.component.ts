import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <section class="main">
      <input class="toggle-all"
            type="checkbox">
      <ul class="todo-list">
        <li>
          <div class="view">
            <input class="toggle"
                  type="checkbox">
            <label>Todo Title</label>
            <button class="destroy"></button>
          </div>
          <input class="edit">
        </li>
      </ul>
    </section>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
