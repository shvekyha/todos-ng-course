import { Item } from './item';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li [ngClass]="{completed: item.completed}">
      <div class="view">
        <!-- dont do the #toggle and toggle.checked its bad practice -->
        <input class="toggle"
              #toggle
              (change)="item.completed=toggle.checked" 
              [checked]="item.completed"
              type="checkbox">
        <label>{{ item.title | low:'!!!' }} created at: {{ item.created | date: 'dd/MM/yyyy'}}</label>
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
