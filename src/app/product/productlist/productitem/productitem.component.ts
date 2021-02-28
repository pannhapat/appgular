import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Products } from '../../../models/products';
import { IProduct } from '../../../models/iproduct';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  product: Products = new Products();


  @Output()
  OnSelected: EventEmitter<Products> = new EventEmitter();
  // @Output() newProductEvent = new EventEmitter<Products>();
  // @Output() deleteProductEvent = new EventEmitter<Products>();
  // @Output() showProductEvent = new EventEmitter<Products>();


  constructor() { }

  ngOnInit(): void {

  }



  // newProduct(product: Products) {
  //   this.newProductEvent.emit(product);

  // }

  // deleteProduct(product: Products) {
  //   this.deleteProductEvent.emit(product);
  // }

  // showProduct(p: IProduct) {
  //   this.product = p;
  // }

  // showProduct(product: Products) {
  //     this.showProductEvent.emit(product);
  // }


}
