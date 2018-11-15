import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core'
import { fromEvent } from 'rxjs'
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators'

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue: string = ''

  @Input() placeholder: string = 'What needs to do done?'
  @Input() delay: number = 300
  @Output() onTextChanges = new EventEmitter<string>()
  @Output() onEnterUp = new EventEmitter<boolean>()

  constructor(private elementRef: ElementRef) {
    const event$ = fromEvent(elementRef.nativeElement, 'keyup')
      .pipe(map(() => this.inputValue))
      .pipe(debounceTime(this.delay))
      .pipe(distinctUntilChanged())
    event$.subscribe(input => {
      return this.onTextChanges.emit(input)
    })
  }

  ngOnInit() {
  }

  enterUp() {
    this.onEnterUp.emit(true)
    this.inputValue = ''
  }
}
