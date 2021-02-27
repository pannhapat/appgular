import { Component, OnInit } from '@angular/core';

interface ICategory {
  name?: string;
  imageurl?: string;
}

@Component({
  selector: 'app-categorymenu',
  templateUrl: './categorymenu.component.html',
  styleUrls: ['./categorymenu.component.css']
})
export class CategorymenuComponent implements OnInit {

  constructor() { }

  categories: ICategory[] = [
    {
      imageurl: 'https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807_960_720.jpg',
      name: 'category 1 ประเภท หมวด 1'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2018/05/12/02/52/leaves-3392320_960_720.jpg',
      name: 'category 2 ประเภท หมวด 2'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2014/01/20/15/13/sheep-248632_960_720.jpg',
      name: 'category 3 ประเภท หมวด 3'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2021/01/22/18/09/wind-5940755_960_720.png',
      name: 'category 4 ประเภท หมวด 4'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png',
      name: 'category 5 ประเภท หมวด 5'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png',
      name: 'category 6 ประเภท หมวด 6'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2018/02/02/00/32/robot-3124412_960_720.jpg',
      name: 'category 7 ประเภท หมวด 7'
    },
    {
      imageurl: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      name: 'category  ประเภท หมวด 9'
    }
  ];

    showingCategory = this.categories[0];

  ngOnInit(): void {
  }

  showCategory(category: ICategory) {
    this.showingCategory = category;
  }

}
