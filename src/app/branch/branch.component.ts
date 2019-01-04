import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todos = [

  ];  

  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
      priority:1,
      done: false
    };
      this.todos.push(newTodo);
    }

    deleteTodo(todo){
      this.todos = this.todos.filter(t => t.label !== todo.label);
    }

}
