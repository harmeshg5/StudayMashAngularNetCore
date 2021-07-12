import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";


@Injectable({
  providedIn: 'root'
})
export class AdminGaurd implements CanActivateChild {

  constructor(private service: AuthService) { }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.isAdminRole();
  }
}
