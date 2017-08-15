import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodolistComponent],
  exports: [TodolistComponent]
})
export class TodolistModule { }
