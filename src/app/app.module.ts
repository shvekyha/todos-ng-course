import { LoggerService } from './utils/logger.service';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginModule } from './login/login.module';
import { PanelComponent } from './utils/panel.component';
import { UtilsModule } from './utils/utils.module';
import { TodolistModule } from './todolist/todolist.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppRouter } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodolistModule,
    UtilsModule,
    LoginModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor (title:Title, router: Router){
    title.setTitle('my APP');

    //subscribe to events of the router
    //router.events.subscribe(events => console.log(events));
  }
}
