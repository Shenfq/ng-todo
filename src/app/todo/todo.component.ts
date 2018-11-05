import { Component, OnInit } from '@angular/core'
import { TodoService } from './todo.service'
import { Todo } from './todo.model'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = []
  desc: string = ''

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos(): void {
    this.service
      .getTodos()
      .then(todos => {
        console.log(todos)
        this.todos = [ ...todos ]
      })
  }

  addTodo() {
    this.service
      .addTodo(this.desc)
      .then(todo => {
        console.log(todo)
        this.todos = [ ...this.todos, todo ]
        this.desc = ''
      })
  }
  toggleTodo(todo: Todo) {
    const i = this.todos.indexOf(todo)
    this.service
      .toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0, i),
          t,
          ...this.todos.slice(i + 1)
        ]
      })
  }
  removeTodo(todo: Todo) {
    const i = this.todos.indexOf(todo)
    this.service
      .deletedTodoById(todo.id)
      .then(() => {
        this.todos = [
          ...this.todos.slice(0, i),
          ...this.todos.slice(i + 1)
        ]
      })
  }

}
