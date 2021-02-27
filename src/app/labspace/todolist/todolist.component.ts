import { Component ,Input,Output, EventEmitter } from '@angular/core';



interface ITask {
  name?: string;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent  {
  // items = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

  items: ITask[] = [{ name: "Task 1" }, { name: "Task 2" }, { name: "Task 3" }, {name:"Task 4"}];

  constructor() {

  }
  @Input()


  indexitem = 0;
  currentItem = 'Television';

  @Output() newItemEvent = new EventEmitter<ITask>();
  @Output() deleteItemEvent = new EventEmitter<ITask>();

  addNewItem(task: ITask) {
    this.newItemEvent.emit(task);
    this.items.push(task);

  }
  deleteItem(task: ITask) {
    this.deleteItemEvent.emit(task);
    const index: number = this.items.indexOf(task);
    if (index !== -1) {
      this.items.splice(index, 1);
  }



    // this.items.splice(task, 1);

  }



}
