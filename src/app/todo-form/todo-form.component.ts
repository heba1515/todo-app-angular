import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  @Output() newTask = new EventEmitter<string>();
  taskName: string = '';

  addTask() {
    if (this.taskName.trim()) {
      this.newTask.emit(this.taskName);
      this.taskName = '';
    }
  }
}
