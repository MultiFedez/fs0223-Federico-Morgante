import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Interface/todo';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoArr: Todo[] = [];

  loading: boolean = true;

  todo: Todo = {
    id: 0,
    title: "",
    completed: false
  };

  value: string = ""

  constructor(private todoSvc: TodoService) { }
  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.todoSvc.getTodos().then(todos => {
      this.todoArr = todos
      this.loading = false;
    })
  }
  addTodo() {
    this.todoSvc.addTodo(this.todo).then(todos => {
      this.getTodos()
      this.value = "";
    })
  }

  deleteTodo(id: number) {
    this.todoSvc.deleteTodo(id).then(todo => {
      this.getTodos()
    })
  }
  completeTodo(id: number) {
    this.todoSvc.completeTodo(id).then(todo => {
      this.getTodos()
    })
  }
}
