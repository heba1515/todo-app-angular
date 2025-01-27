import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {

  tasks: { name: string; completed: boolean }[] = [];

  addTask(taskName: string) {
    if (taskName.trim()) {
      this.tasks.push({ name: taskName, completed: false });
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
