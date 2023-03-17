declare var M: any;
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomDatePipe } from '../custom-date.pipe';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomDatePipe],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  edit: boolean = false;
  constructor() {}
  switchDone(): void {
    this.todo.done = !this.todo.done;
  }
  changeName(): void {
    M.toast({ html: 'Tache ' + this.todo.label + ' a été mise à jour !' });
    this.edit = false;
  }
  editMode(): void {
    this.edit = true;
  }
  ngOnInit() {}
}
