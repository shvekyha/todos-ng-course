import { UtilsModule } from './../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { HeaderComponent } from './header.component';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer.component';
import { ListComponent } from './list.component';
import { ItemComponent } from './item.component';
import { ToggleComponent } from './toggle.component';
import { TodolistService } from "./todolist.service";
import { HttpClientModule } from "@angular/common/http";

class MockApi{
  public items = [{ title: 'mock item', completed: true }]
}

@NgModule({
  imports: [
    CommonModule, UtilsModule, HttpClientModule
  ],
  declarations: [
    TodolistComponent, 
    HeaderComponent, 
    MainComponent, 
    FooterComponent, 
    ListComponent, 
    ItemComponent, 
    ToggleComponent
  ],
  exports: [TodolistComponent],
  providers: [ 
    { provide: TodolistService, useClass: MockApi }
  ]
})
export class TodolistModule { }
