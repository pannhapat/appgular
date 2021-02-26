import { Component } from '@angular/core';

// interface Lecturer {
//   name?: string;
//   imageurl?: string;
//   email?: string;
//   fullname?: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'appgular';
  // baseurl = '';


  // lecturers: Lecturer[] = [
  //   {
  //     imageurl: 'https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807_960_720.jpg',
  //     email: 'a@mail.com',
  //     name: 'a' ,
  //     fullname: 'a นามสกุล'
  //   },
  //   {
  //     imageurl: 'https://cdn.pixabay.com/photo/2018/05/12/02/52/leaves-3392320_960_720.jpg',
  //     email: 'b@mail.com',
  //     name: 'b ',
  //     fullname: 'b  นามสกุล'
  //   },
  //   {
  //     imageurl: 'https://cdn.pixabay.com/photo/2014/01/20/15/13/sheep-248632_960_720.jpg',
  //     email: 'c@mail.com',
  //     name: 'c',
  //     fullname: 'c  นามสกุล'
  //   },
  //   {
  //     imageurl: 'https://cdn.pixabay.com/photo/2021/01/22/18/09/wind-5940755_960_720.png',
  //     email: 'd@mail.com',
  //     name: 'd',
  //     fullname: 'd  นามสกุล'
  //   },
  //   {
  //     imageurl: 'https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png',
  //     email: 'e@mail.com',
  //     name: 'e',
  //     fullname: 'e  นามสกุล'
  //   },
  //   {
  //     imageurl: 'https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png',
  //     email: 'f@mail.com',
  //     name: 'f',
  //     fullname: 'เอฟ f'
  //   },
  //   {
  //     imageurl: 'https://cdn.pixabay.com/photo/2018/02/02/00/32/robot-3124412_960_720.jpg',
  //     email: 'g@mail.com',
  //     name: 'g',
  //     fullname: 'g  นามสกุล'
  //   },
  //   {
  //     imageurl: 'https://cdn.pixabay.com/photo/2020/06/06/12/34/cartoon-5266407_960_720.png',
  //     email: 'h@mail.com',
  //     name: 'h ',
  //     fullname: 'h  นามสกุล'
  //   },
  //   {
  //     imageurl: 'https://cdn.pixabay.com/photo/2020/06/06/12/34/cartoon-5266407_960_720.png',
  //     email: 'i@mail.com',
  //     name: 'i ',
  //     fullname: 'i นามสกุล'
  //   }
  // ];


  // backgroundimages = [
  //     'assets/bb.png',
  //     'assets/bb.png',
  //     'assets/bb.png',
  //     'assets/bb.png',
  //     'assets/bb.png',
  //     'assets/bb.png',
  //     'assets/bb.png',
  //     ];

  //   backgroundimage = this.backgroundimages[0];
  //   showingLecturer = this.lecturers[0];

    constructor() { }

    ngOnInit() {
    }

    // showLecturer(lecturer: Lecturer) {
    //   this.backgroundimage = this.backgroundimages[Math.floor(Math.random() * this.backgroundimages.length)];
    //   this.showingLecturer = lecturer;
    // }
}
