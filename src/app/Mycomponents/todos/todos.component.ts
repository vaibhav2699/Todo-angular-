import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem:any; 
  todos:Todo[];
  constructor() { 
    this.todos=[]
    this.localItem=localStorage.getItem("todo")
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
  }
  
  ngOnInit(): void {
  }

  deletetodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    console.log(index);
    this.todos.splice(index,1);
    console.log("parents",todo);
    localStorage.setItem("todo",JSON.stringify(this.todos))
  }

  todoAdd(todo:Todo){
    console.log(todo)
    this.todos.push(todo); 
    localStorage.setItem("todo",JSON.stringify(this.todos))
  }

  todocheckbox(todo:Todo){
    console.log("toddo checkbox");
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todo",JSON.stringify(this.todos))

  }
}
