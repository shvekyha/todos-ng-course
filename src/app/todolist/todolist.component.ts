import { Todolist } from './todolist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      <app-header [title]="title"
                  (itemAdded)="list.addItem($event)"></app-header>
      <app-main>
        <app-toggle></app-toggle>
        <app-list [items]="list.items"></app-list>
      </app-main>
      <app-footer></app-footer>
    </section>
  `,
  styles: []
})
export class TodolistComponent implements OnInit {

  public list: Todolist;
  public title: string;

  constructor() { 
    this.list = new Todolist();
    this.title = 'Todos';
  }

  ngOnInit() {
  }

}
