import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

interface IBanner {
  name?: string;
  imageurl?: string;
}

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class TopbannerComponent implements OnInit {

  ame = 'Angular ';

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 200;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  topbanners: IBanner[] = [
    {
      imageurl: 'https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807_960_720.jpg',
      name: 'a'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2018/05/12/02/52/leaves-3392320_960_720.jpg',
      name: 'b'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2014/01/20/15/13/sheep-248632_960_720.jpg',
      name: 'c'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2021/01/22/18/09/wind-5940755_960_720.png',
      name: 'd'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png',
      name: 'e'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png',
      name: 'f'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2018/02/02/00/32/robot-3124412_960_720.jpg',
      name: 'g'
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2020/06/06/12/34/cartoon-5266407_960_720.png',
      name: 'h '
    },
    {
      imageurl: 'https://cdn.pixabay.com/photo/2020/06/06/12/34/cartoon-5266407_960_720.png',
      name: 'i '
    }
  ];

  bgimages = [
    'https://cdn.pixabay.com/photo/2020/06/06/12/34/cartoon-5266407_960_720.png',
    'https://cdn.pixabay.com/photo/2018/02/02/00/32/robot-3124412_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/02/02/00/32/robot-3124412_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png',
    'https://cdn.pixabay.com/photo/2021/01/22/18/09/wind-5940755_960_720.png',
    'https://cdn.pixabay.com/photo/2020/06/06/12/34/cartoon-5266407_960_720.png',
    ];

    bgimage = this.bgimages[0];
    showingBanner = this.topbanners[0];

  ngOnInit(): void {
  }

  showBanner(banner: IBanner) {
    this.bgimage = this.bgimages[Math.floor(Math.random() * this.bgimages.length)];
    this.showingBanner = banner;
  }



}
