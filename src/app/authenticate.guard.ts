import { AuthguardServiceService } from './authguard-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  constructor(private Authguardservice:AuthguardServiceService,private router:Router){}
  canActivate():boolean{
    // this.router.navigateByUrl("login");
    
    // return false
if(!this.Authguardservice.gettoken()){
  this.router.navigateByUrl("/login");
  return false
}
return !!this.Authguardservice.gettoken();
  }
  
}
