import { Injectable } from '@angular/core';
import { Todo } from '../Interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url: string = 'http://localhost:3000/todos';
  todoArr: Todo[] = [];

  constructor() { }

  getTodos(): Promise<Todo[]> {
    return fetch(this.url).then((response => response.json()))
  }
  addTodo(todo: Todo): Promise<Todo> {
    return fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    }).then((response => response.json()))
  }
  deleteTodo(id: number) {
    return fetch(this.url + '/' + id, {
      method: 'DELETE',
    }).then(response => response.json())
  }
  completeTodo(id: number) {
    return fetch(this.url + '/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true })
    }).then(response => response.json())
  }
}
