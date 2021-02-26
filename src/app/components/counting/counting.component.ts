import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  constructor() { }
  count = 0;
  ngOnInit(): void {
  }
  countNumber() {
    this.count += 1;
  }

}
