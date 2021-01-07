import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../models/User';
let session=localStorage.getItem('x-access-token');
let httpOptions={
  headers:new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}
// if(session.loggedIn){
//    httpOptions={
//     headers:new HttpHeaders({
//       'x-access-token':session.token,
//       'Access-Control-Allow-Origin': '*'
//     })
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class UserService {
userUrl:string='http://localhost:4000/user'
  constructor(private http:HttpClient) { }

  login(user:any):Observable<any>{
    // console.log(user);
    
return this.http.post<any>(`${this.userUrl}/login`,user,httpOptions);
  }
  register(user:User):Observable<any>{
    // console.log(user);
    return this.http.post<User>(`${this.userUrl}/register`,user,httpOptions);
  }
}
