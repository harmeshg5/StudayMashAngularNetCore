import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { userService } from "src/app/Services/user.service";


@Component({
  selector: "user",
  templateUrl: 'user.component.html',
  providers: []
})

export class UserComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private service: userService) {

  }
  user: any;
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.service.getUserById(id).subscribe((response: Response) => {

      this.user = response;
    })
    // console.log(this.activatedRoute.snapshot.params['id'] + ' - ' + this.activatedRoute.snapshot.params['name']);
  }

  getUserById() {

  }

}
