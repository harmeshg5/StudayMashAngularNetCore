import { Injectable, OnInit } from "@angular/core";




@Injectable()
export class AuthService implements OnInit {
  constructor() { }

  ngOnInit() { }

  isUserLoggedIn() {
    return true;
  }

  isAdminRole() {
    return true;
  }

  authUser(user: any) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem("Users") as string);
    }

    return UserArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);
  }
}
