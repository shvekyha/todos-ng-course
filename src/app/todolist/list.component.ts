import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './item';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="todo-list">
      <app-item *ngFor="let item of items | async" [item]="item"></app-item>
    </ul>
  `,
  styles: []
})
export class ListComponent {
  
  @select('list') items;
}
