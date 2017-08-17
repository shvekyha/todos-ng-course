import { Item } from './todolist/item';
import { LoggerService } from './utils/logger.service';
import { AppRouter } from './app.routes';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { UtilsModule } from './utils/utils.module';
import { TodolistModule } from './todolist/todolist.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineReducers } from 'redux';
import { listReducer } from "./todolist/list.reducer";

//import { PanelComponent } from './utils/panel.component';

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
