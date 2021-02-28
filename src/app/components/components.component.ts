import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor() { }
  name = 'Pannhapat';
  actionvoid(): void{
    alert('hello' + this.name);
  }
  ngOnInit(): void {
  }



}
