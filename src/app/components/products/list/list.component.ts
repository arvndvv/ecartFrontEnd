import { ProductsService } from './../../../services/products.service';
import { Product } from './../../../models/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
products:Product[];
 notEmpty:boolean;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.list().subscribe(products=>{
      console.log(products);
      this.products=products;
      if(this.products.length>0){
        this.notEmpty=true;
      }
      else{
        this.notEmpty=false;
      }
      console.log(this.notEmpty)
    })

   
  }

}


