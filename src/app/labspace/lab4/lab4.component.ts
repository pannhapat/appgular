import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})
export class Lab4Component implements OnInit {

  constructor() { }
  currentItem = { name: 'teapot'} ;
  arraylab4 = new Array(10);

  array1 = new Array(1, 2, 3);




  ngOnInit(): void {
  }

}
