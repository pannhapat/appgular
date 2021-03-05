import { Component } from '@angular/core';
import { News } from './news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'set appgular';

  news = new Array();

  constructor() { }
    // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void { }

}
