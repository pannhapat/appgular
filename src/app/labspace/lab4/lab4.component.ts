import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})


export class Lab4Component implements OnInit {

  constructor() { }

  forLoopArray(elements: number): Array<any> {
    return new Array(elements);
  }

  ngOnInit(): void {
  }

}
