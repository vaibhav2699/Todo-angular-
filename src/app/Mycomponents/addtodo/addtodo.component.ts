import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  @Output()todoAdd:EventEmitter<Todo>=new EventEmitter()
  title!: string;
  desc!: string;
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  onsubmit(){
    console.log("submit");
    const todo={
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}
