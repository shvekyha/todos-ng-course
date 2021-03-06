import { Item } from './item';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  styles: ['.active {color:green}'],
  template: `
    <li [appClass]="{active: item.completed}" [ngClass]="{completed: item.completed}">
      <div class="view">
        <!-- dont do the #toggle and toggle.checked its bad practice -->
        <input class="toggle"
              #toggle
              (change)="item.completed=toggle.checked" 
              [checked]="item.completed"
              type="checkbox">
        <label appMarker="blue" (onMark)="onMarkHanlder()">{{ item.title | low:'!!!' }} created at: {{ item.created | date: 'dd/MM/yyyy'}}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `
})
export class ItemComponent {

  @Input() item: Item;

  onMarkHanlder(){
    console.log('onMarkHanlder');
  }
}
