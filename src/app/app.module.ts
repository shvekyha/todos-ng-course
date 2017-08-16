import { LoginModule } from './login/login.module';
import { PanelComponent } from './utils/panel.component';
import { UtilsModule } from './utils/utils.module';
import { TodolistModule } from './todolist/todolist.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodolistModule,
    UtilsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
