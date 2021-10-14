import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input()todo!: Todo;
  @Input()i!: number;
  @Output()tododelete:EventEmitter<Todo>=new EventEmitter()
  @Output()todocheckbox:EventEmitter<Todo>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onclick(todo:Todo){
    this.tododelete.emit(todo);
    console.log("hello from delete button",todo.sno)
  }

  checkboxclick(todo:Todo){
    this.todocheckbox.emit(todo);
    console.log("checkbox todo item")
  }
}
