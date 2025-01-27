import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  @Input() tasks: { name: string; completed: boolean }[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleTask = new EventEmitter<number>();

  onDeleteTask(index: number) {
    this.deleteTask.emit(index);
  }

  onToggleTask(index: number) {
    this.toggleTask.emit(index);
  }
}
