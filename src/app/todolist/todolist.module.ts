import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { HeaderComponent } from './header.component';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodolistComponent, HeaderComponent, MainComponent, FooterComponent],
  exports: [TodolistComponent]
})
export class TodolistModule { }
