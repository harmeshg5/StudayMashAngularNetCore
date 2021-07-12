import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser: string = '';
  constructor(private service: AuthService) { }

  ngOnInit() {
  }
  loggedIn() {
    this.loggedInUser = localStorage.getItem("token") as string;
    return this.loggedInUser;
  }

  onLogOut() {
    localStorage.removeItem("token");
  }
}
