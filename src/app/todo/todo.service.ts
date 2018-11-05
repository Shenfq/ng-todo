import { Injectable } from '@angular/core'
import { UUID } from 'angular2-uuid'
import { Headers, Http } from '@angular/http'
import { Todo } from './todo.model'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private api_url = 'api/todos'
  private headers = new Headers({
    'Content-Type': 'application/json'
  })
  todos: Todo[] = []
  constructor(private http: Http) { }
  addTodo(todoItem: string): Promise<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: todoItem,
      completed: false
    }
    return this.http
      .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Todo)
      .catch(this.handleError)
  }
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`
    console.log(url)
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed})
    return this.http
      .put(url, JSON.stringify(updatedTodo), { headers: this.headers })
      .toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError)
  }
  deletedTodoById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`
    console.log(url)
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }
  getTodos(): Promise<Todo[]> {
    return this.http
      .get(this.api_url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Todo[])
      .catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
    console.log(error)
    return Promise.reject(error.message || error)
  }
}
