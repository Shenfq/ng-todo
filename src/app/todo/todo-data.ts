import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Todo } from './todo.model'
import { UUID } from 'angular2-uuid'

export class InMemoryToodoDbService implements InMemoryDbService {
  createDb() {
    let todos: Todo[] = [
      {
        id: UUID.UUID(),
        desc: 'getting up',
        completed: true
      },
      {
        id: UUID.UUID(),
        desc: 'go to school',
        completed: false
      }
    ]
    return { todos }
  }
}
