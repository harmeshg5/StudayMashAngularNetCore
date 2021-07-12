import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class PropertyUserService implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }


  adduser(user: any) {
    var users = [];
    if (localStorage.getItem('Users')) {
      console.log('1');
      users = JSON.parse(localStorage.getItem('Users') as string);
      console.log(users);
      console.log('2');
      users.push(user);
      //users = [user, ...[Object.keys(users)]];
      console.log('3');
    } else {
      console.log('4');
      users = [user];
    }
    console.log('5');
    //users.push(this.user);
    localStorage.setItem('Users', JSON.stringify(users));
  }


}
