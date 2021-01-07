import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 uname:string;
  email:string;
  password:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
onReg(){
  const newUser={
    name:this.uname,
    email:this.email,
    password:this.password,
    role:'user'
  }
  this.userService.register(newUser).subscribe(data=>{
    console.log(data)
  })
}
}
