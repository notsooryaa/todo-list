import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks: string[] = [];

  addTask(task: string) {
    if (task.trim()) {
      this.tasks.push(task);
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
