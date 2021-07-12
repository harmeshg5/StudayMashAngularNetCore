import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, throwError, } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable()
export class userService implements OnInit {

  constructor(private httpclient: HttpClient) {

  }


  ngOnInit() {

  }

  getAllUsersFromDummy() {
    return [
      { id: 101, name: 'John', city: 'Delhi', salary: 2000, dob: new Date("01/10/1934") },
      { id: 102, name: 'Wick', city: 'Delhi', salary: 3000, dob: new Date("07/04/1967") },
      { id: 103, name: 'Monu', city: 'Delhi', salary: 5340, dob: new Date("11/10/1926") },
      { id: 104, name: 'baby', city: 'Delhi', salary: 2325, dob: new Date("04/03/1947") },
      { id: 105, name: 'Mohn', city: 'Delhi', salary: 5685, dob: new Date("03/02/2012") },
      { id: 106, name: 'Jown', city: 'Delhi', salary: 4765, dob: new Date("08/10/2001") }
    ];
  }

  getAllUsers() {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users');
    //, catchError(error => { return throwError('Something went wrong' + error); });
  }

  getUserById(id: number): any {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

}
