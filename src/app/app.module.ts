import { NgRedux } from '@angular-redux/store';
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
import { LoginComponent } from './login/login.component';

import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { combineReducers } from 'redux';
import { listReducer } from "./todolist/list.reducer";

const rootReducer = combineReducers({
  list: listReducer
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodolistModule,
    UtilsModule,
    LoginModule,
    AppRouter,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor (ngRedux: NgRedux<any>, devTool: DevToolsExtension){
    ngRedux.configureStore(rootReducer, {}, [], [devTool.enhancer()]);
  }
}
