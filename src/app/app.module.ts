import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { AuthService } from './core/auth.service'
import { routing } from './app.routes';
import { TodoComponent } from './todo/todo.component'

import { InMemoryWebApiModule  } from 'angular-in-memory-web-api'
import { InMemoryToodoDbService } from './todo/todo-data'


@NgModule({
  declarations: [
    AppComponent, LoginComponent, TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryToodoDbService)
  ],
  providers: [
    {provide: 'auth', useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
