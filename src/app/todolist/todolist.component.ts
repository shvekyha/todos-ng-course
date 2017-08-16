import { TodolistService } from './todolist.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from "../utils/logger.service";
import { ActivatedRoute } from "@angular/router";

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
export class TodolistComponent implements OnDestroy, OnInit {

  public list: TodolistService;
  public title: string;
  public route: ActivatedRoute;

  constructor(list: TodolistService, logger: LoggerService, route: ActivatedRoute) { 
    this.list = list;
    this.title = 'Todos';
    this.route = route;
    console.log('TodolistComponent instance!');
  }

  ngOnInit() {
    // this.route.params.subscribe( params => {
    //   this.title = params.uid;
    // });
    
    this.route.queryParams.subscribe( params => {
      this.title = params.uid;
    });
  }

  ngOnDestroy(){
    console.log('TodolistComponent ngOnDestry');
  }

}
