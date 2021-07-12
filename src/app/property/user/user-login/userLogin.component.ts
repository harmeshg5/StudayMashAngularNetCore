import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AlertyfyService } from 'src/app/Services/alertyfy.service';

@Component({
  selector: 'userLogin',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertyfy: AlertyfyService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const token = this.authService.authUser(form.value);

    if (token) {
      localStorage.setItem('token', token.userName);
      this.alertyfy.success('login in successful');
      this.router.navigate(['/']);
    }
    else {
      this.alertyfy.warning('login in fail');
    }
  }
}
