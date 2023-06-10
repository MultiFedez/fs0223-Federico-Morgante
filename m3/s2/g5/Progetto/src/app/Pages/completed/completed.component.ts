import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Interface/todo';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  loading: boolean = true;
  todoArr: Todo[] = [];
  constructor(private todosvc: TodoService) {

  }
  ngOnInit() {
    this.getTodos()
  }
  getTodos() {
    this.todosvc.getTodos().then((todos) => {
      this.todoArr = todos.filter(todos => todos.completed == true)
      this.loading = false
    })
  }
  deleteTodo(id: number) {
    this.todosvc.deleteTodo(id).then(todo => {
      this.getTodos()
    })

  }
}
