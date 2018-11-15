import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { ModuleWithProviders } from '@angular/core'

export const routers: Routes = [
  {
    path: '',
    redirectTo: 'todo/ALL',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo'
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routers)
