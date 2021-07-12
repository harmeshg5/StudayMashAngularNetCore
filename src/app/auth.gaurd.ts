
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
  providedIn: 'root'
})

export class AuthGaurd implements CanActivate {

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.service.isUserLoggedIn())
      return true;
    else
    window.alert("Permission denied for this page!")
      return false;
  }

  constructor(private service: AuthService) {

  }
}
