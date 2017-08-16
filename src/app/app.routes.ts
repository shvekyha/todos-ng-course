
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { TodolistComponent } from "./todolist/todolist.component";

const routes: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { 
          path: 'list', 
          component: TodolistComponent }
    ];

export const AppRouter = RouterModule.forRoot(routes);