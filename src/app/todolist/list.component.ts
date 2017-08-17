import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Item } from "./item";

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="todo-list">
      <app-item *ngFor="let item of items" [item]="item"></app-item>
    </ul>
  `,
  styles: []
})
export class ListComponent {
  
  @Input() items : Item[];
}
