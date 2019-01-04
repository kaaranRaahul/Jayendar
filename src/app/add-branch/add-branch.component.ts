import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todos = [



  ]; 
  
  
  
  addTodo(newTodoLabel){
  
  var newTodo = {
  
  label: newTodoLabel
  };
  
  this.todos.push(newTodo);
  
  }
  
  
  
  deleteTodo(todo){
  
  this.todos = this.todos.filter(t => t.label !== todo.label);
  
  }
  

}
