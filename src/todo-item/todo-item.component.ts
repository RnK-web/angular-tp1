declare var M: any;
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  edit: boolean = false;
  name: string;
  constructor() {}
  switchDone() {
    this.todo.done = !this.todo.done;
  }
  changeName() {
    M.toast({ html: 'Tache ' + this.todo.label + ' a été mise à jour !' });
    this.edit = false;
  }
  editMode() {
    this.edit = true;
  }
  ngOnInit() {}
}
