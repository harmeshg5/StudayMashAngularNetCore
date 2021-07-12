import { Injectable, OnInit } from "@angular/core";
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})

export class AlertyfyService implements OnInit {

  constructor() { }

  ngOnInit() { }


  success(message: string) {
    alertyfy.success(message);
  }


  warning(message: string) {
    alertyfy.warning(message);
  }


  error(message: string) {
    alertyfy.error(message);
  }

}
