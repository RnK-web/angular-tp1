import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  standalone: true,
  selector: 'app-todo-lists',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css'],
})
export class TodoListsComponent implements OnInit {
  public todos: Todo[] = [
    { label: 'Premier', done: false },
    { label: 'Deuxieme', done: false },
    { label: 'Troisieme', done: true },
  ];
  constructor() {}
  switchDone(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }
  ngOnInit() {}
}
