import { logging } from 'protractor';
import { ProductsService } from './../../../services/products.service';
import { Product } from './../../../models/Product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
products:Product[];
 notEmpty:boolean;
  constructor(private productService:ProductsService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.productService.list().subscribe(products=>{
      // console.log(products);
      this.products=products;
      if(this.products.length>0){
        this.notEmpty=true;
      }
      else{
        this.notEmpty=false;
      }
      // console.log(this.notEmpty)
    })
  }
  addToCart(newItem:object){
// console.log(newItem)
this.productService.add(newItem).subscribe(item=>{
  // console.log(item)
  this.toastr.success("item added to cart!","Success")
},(err)=>{
  // console.log(err)
this.toastr.error(err.statusText,'Error',err)
})
  }

}


