import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'simpleForm',
  template: `
  <form (submit)="onClick(val)">
  <input #val/> <button>Submit</button>
  </form>

   ` ,
  styleUrls: [],
  providers: []
})

export class SimpleForm implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  onClick(val: any) {
    alert(val.value);
  }
}
