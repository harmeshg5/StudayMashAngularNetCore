import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AlertyfyService } from 'src/app/Services/alertyfy.service';
import customValidators from '../../helpers/customValidators';
import { PropertyUserService } from '../../user.service';



@Component({
  selector: 'userRegister',
  templateUrl: './userRegister.component.html',
  styleUrls: ['./userRegister.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationFrom!: FormGroup;
  user: any = {};
  constructor(private fb: FormBuilder, private service: PropertyUserService, private alertyfyService: AlertyfyService) { }

  ngOnInit() {
    // this.registrationFrom = new FormGroup({
    //   userName: new FormControl('Mark', Validators.required),
    //   email: new FormControl(null, [Validators.required]),
    //   password: new FormControl(null, [Validators.required]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required])
    // },
    //   { validators: [customValidators.matchingPasswords] } // remember to use 'this'
    // );

    this.createRegistrationForm();
  }

  createRegistrationForm() {

    this.registrationFrom = this.fb.group({
      userName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      mobile: [null, Validators.required],
    }
      , { validators: [customValidators.matchingPasswords] }
    )
  }

  onSubmit() {
    console.log(this.registrationFrom);
    this.user = Object.assign(this.user, this.registrationFrom.value);
    this.service.adduser(this.user);
    this.alertyfyService.success("Congrats");
    this.registrationFrom.reset();
  }

}
