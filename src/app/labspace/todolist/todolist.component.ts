import { Component ,Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent  {
  items = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

  constructor() {

  }
  @Input()
  item = "task";

  indexitem = 0;
  currentItem = 'Television';

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() deleteItemEvent = new EventEmitter<number>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.items.push(value);

  }
  deleteItem(value: number) {
    this.deleteItemEvent.emit(value);
    this.items.splice(value, 1);

  }



}
