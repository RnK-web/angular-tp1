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
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-todo-lists> </app-todo-lists>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
