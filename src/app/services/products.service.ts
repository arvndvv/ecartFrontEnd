import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let token=localStorage.getItem('x-access-token');
console.log(token)
let httpOptions={
  headers:new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'x-access-token':token
    })
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsUrl:string='http://localhost:4000/product'
  constructor(private http:HttpClient) { }
  list():Observable<any>{
    return this.http.get<any>(`${this.productsUrl}`,httpOptions)
  }
}
