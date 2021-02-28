import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Products } from '../../models/products';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  product: Products = new Products();

  productList: Products[] = [
    {
      name: 'ส้มโอ',
      price: 990
    },
    {
      name: 'แตงโม',
      price: 1000
    },
    {
      name: 'มะพร้าวน้ำหอม',
      price: 500
    },

  ];


  constructor() { }

  ngOnInit(): void { }

}
