import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li>
      <div class="view">
        <input class="toggle"
              type="checkbox">
        <label>Todo Title</label>
        <button class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `,
  styles: []
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
