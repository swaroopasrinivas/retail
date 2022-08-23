import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
}

export class User {
  id: number;
  emailId: string;
  userName: string;
  password: string;

  // constructor() {}

  constructor(id: number, emailId: string, userName: string, password: string) {
    this.id = id;
    this.emailId = emailId;
    this.userName = userName;
    this.password = password;
  }
}
