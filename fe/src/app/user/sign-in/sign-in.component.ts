import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(private userService: UserService,private router : Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string|undefined;
  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  onSubmit(form : NgForm){

    if((form.value.email=='abc@gmail.com') &&(form.value.password=='1234'))
    {
      this.router.navigateByUrl('/loginbody');
    }
    else{
      alert('username : abc@gmail.com  #   password : 1234 ')
    }
  //   this.userService.login(form.value).subscribe(
  //     res => {
  //       // this.userService.setToken(res['token']);
  //       this.router.navigateByUrl('/loginbody');
  //     },
  //     err => {
  //       this.serverErrorMessages = err.error.message;
  //     }
  //   );
   }


}
