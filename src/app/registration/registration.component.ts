import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private _service: AuthServiceService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
        this.msg = 'Registration successful';
        this._router.navigate(['/dashboard']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = error.error;
      }
    );
  }
}
