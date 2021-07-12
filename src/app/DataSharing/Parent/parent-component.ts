import { Component, OnInit } from "@angular/core";
import { userService } from "src/app/Services/user.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'parent-component',
  templateUrl: 'parent-component.html',
  styleUrls: [],
  providers: []
})
export class ParentComponent implements OnInit {

  title: string = "angular practice";
  errorMessage: string = "Loading...";
  users: any = [];
  selectedCountryText: string = '';
  selectedCountryValue: number = 0;
  isUserLoggedIn: boolean = false;
  userNameValue: string = "ParentUser";
  childUName: string = '';

  constructor(private serivce: userService) {
  }

  ngOnInit() {
    //this.users = this.serivce.getAllUsersFromDummy();
    this.serivce.getAllUsers().subscribe((response) => {
      this.users = response as [];
    }, (err) => { this.errorMessage = "Some interbal issue" })
  }

  countries: any[] = [
    { cId: 101, cName: 'India' },
    { cId: 102, cName: 'China' },
    { cId: 103, cName: 'Japan' },
    { cId: 104, cName: 'Korea' },
    { cId: 105, cName: 'Taiwa' },
    { cId: 106, cName: 'Nepal' }
  ];

  choice($event: any) {
    this.selectedCountryValue = $event.target.value;
    this.selectedCountryText = $event.target.options[$event.target.options.selectedIndex].text;
  }

  getValFromChild(event: any) {
    this.childUName = event;
  }

  getAllUsers() {
    return this.serivce.getAllUsers().subscribe((data) => {
      console.log('data');
      console.log(data);
      return data;
    })
  }

}
