import { Product } from './../../../models/Product';
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product:Product;
@Output() addToCart:EventEmitter<Product>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
