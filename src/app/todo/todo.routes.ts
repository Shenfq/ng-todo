import { RouterModule, Routes } from '@angular/router'
import { TodoComponent } from './todo.component'

export const routers: Routes = [
  {
    path: 'todo/:filter',
    component: TodoComponent
  }
]

export const routing = RouterModule.forChild(routers)
