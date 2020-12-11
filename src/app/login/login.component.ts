import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'kalpesh'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  //Router
  //Dependency Injection
  constructor(private router : Router) { }

  ngOnInit() {
  }
  handleLogin(){

    //console.log(this.username);
    if(this.username === 'kalpesh' && this.password === 'gharte'){
      // redirect to welcome page
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }
  }

}
