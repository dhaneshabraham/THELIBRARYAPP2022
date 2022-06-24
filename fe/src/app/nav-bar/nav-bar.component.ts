import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  btn1="Sign Up"
  btn2="Log In"
  showLogout:boolean=true
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.btn1="Sign Up"
    this.btn2="Log In"
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/']);
  }

}
