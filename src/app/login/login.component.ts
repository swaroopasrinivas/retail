import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Route, Router } from '@angular/router';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service: AuthServiceService, private _router: Router) {}

  // constructor() { }

  ngOnInit(): void {}

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
        this._router.navigate(['/dashboard']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentials, please enter valid emailid and password';
      }
    );
  }

  gotoregistration() {
    this._router.navigate(['/registration']);
  }
}
