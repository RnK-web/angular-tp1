import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TodoListsComponent } from './todo-lists/todo-lists.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TodoListsComponent],
  template: `
    <br>
    <app-todo-lists> </app-todo-lists>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
