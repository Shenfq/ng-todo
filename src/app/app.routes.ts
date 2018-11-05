import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { TodoComponent } from './todo/todo.component'
import { ModuleWithProviders } from '@angular/core'

export const routers: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routers)
