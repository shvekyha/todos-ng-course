import { Item } from './item';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li>
      <div class="view">
        <input class="toggle"
              [checked]="item.completed"
              type="checkbox">
        <label>{{ item.title }}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `,
  styles: []
})
export class ItemComponent {

  @Input() item: Item;

}
