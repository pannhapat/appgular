import { Component ,Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';


// interface ITask {
//   name?: string;
// }

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent  {
  // แบบแรก
  // items: ITask[] = [{ name: "Task 1" }, { name: "Task 2" }, { name: "Task 3" }, {name:"Task 4"}];
  items: Task[] = [{ id:1, name: "Task 1", description:"Description Task 1" }, { id:2, name: "Task 2", description:"Description Task 2" }, { id:3, name: "Task 3", description:"Description Task 3" }, {id:4, name: "Task 4", description:"Description Task 4"}];

  constructor() {

  }
  @Input()


  indexitem = 0;
  currentItem = 'Television';

  @Output() newItemEvent = new EventEmitter<Task>();
  @Output() deleteItemEvent = new EventEmitter<Task>();

  showingTask = this.items[0];

  showTask(task: Task) {
    this.showingTask = task;
  }

  addNewItem(task: Task) {
    task.id = this.items.length + 1 ;
    this.newItemEvent.emit(task);
    this.items.push(task);

  }
  deleteItem(task: Task) {
    this.deleteItemEvent.emit(task);
    const index: number = this.items.indexOf(task);
    if (index !== -1) {
      this.items.splice(index, 1);
    }

  }


  // @Output() newItemEvent = new EventEmitter<ITask>();
  // @Output() deleteItemEvent = new EventEmitter<ITask>();

  // addNewItem(task: ITask) {
  //   this.newItemEvent.emit(task);
  //   this.items.push(task);

  // }
  // deleteItem(task: ITask) {
  //   this.deleteItemEvent.emit(task);
  //   const index: number = this.items.indexOf(task);
  //   if (index !== -1) {
  //     this.items.splice(index, 1);
  //   }

  // }



}
