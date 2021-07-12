import { Component, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from "src/app/gaurds/unsavedChanges.gaurd";

@Component({
  selector: 'add-user',
  templateUrl: 'add-user.component.html',
  styleUrls: [],
  providers: []
})

export class AddUserComponent implements OnInit, CanComponentLeave {
  constructor() {

  }

  ngOnInit() {

  }

  canLeave(): boolean {
    if (this.userName.dirty)
      return window.confirm('You have some unsaved changes on this page. Are you sure to navigate?');
    else
      return true;
  }

  userName: FormControl = new FormControl();


}
