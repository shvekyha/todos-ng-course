import { TodolistService } from './todolist.service';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from "../utils/logger.service";

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

  public list: TodolistService;
  public title: string;

  constructor(list: TodolistService, logger: LoggerService) { 
    this.list = list;
    this.title = 'Todos';
    logger.log('TodolistComponent instance!');
  }

  ngOnInit() {
  }

}
