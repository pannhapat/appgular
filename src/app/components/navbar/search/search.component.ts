import { Component, OnInit, OnChanges,SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {


  @Input()

  title!: string;

  constructor() { }

  ngOnInit(): void {
    console.log("home on init");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log((changes.title.previousValue));
    console.log((changes.title.currentValue));
  }



}
