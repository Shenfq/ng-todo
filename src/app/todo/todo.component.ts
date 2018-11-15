import { Component, OnInit, Inject } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Todo } from './todo.model'

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = []
  desc: string = ''

  constructor(
    @Inject('todoService') private service,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.getTodos()
    this.route.params.forEach((params: Params) => {
      let filter = params.filter
      this.filterTodos(filter || 'ALL')
    })
  }
  toggleAll() {
    Promise.all(
      this.todos.map(
        todo => this.toggleTodo(todo)
      )
    )
  }
  clearCompleted() {
    const completed_todos = this.todos.filter(todo => todo.completed)
    const active_todos = this.todos.filter(todo => !todo.completed)
    Promise.all(
      completed_todos.map(todo =>
        this.service.deletedTodoById(todo.id)
      )
    ).then(() => {
      this.todos = [...active_todos]
    })
  }
  filterTodos(filter: string) {
    this.service.filterTodos(filter).then(todos => {
      this.todos = [...todos]
    })
  }
  onTextChanges(value) {
    this.desc = value
  }
  getTodos(): void {
    this.service
      .getTodos()
      .then(todos => {
        this.todos = [ ...todos ]
      })
  }

  addTodo() {
    if (this.desc.trim() === '') {
      alert('todo 描述不能为空')
      return
    }
    this.service
      .addTodo(this.desc)
      .then(todo => {
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
