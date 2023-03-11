declare var M: any;

import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  standalone: true,
  selector: 'app-todo-lists',
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css'],
})
export class TodoListsComponent implements OnInit {
  name: string;
  public todos: Todo[] = [
    { label: 'Premier', done: false },
    { label: 'Deuxieme', done: false },
    { label: 'Troisieme', done: true },
  ];
  constructor() {}
  createTodo(name: string) {
    M.toast({ html: 'Tache ' + name + ' a été crée !' });
    this.todos.push({ label: name, done: false });
  }
  ngOnInit() {}
}
