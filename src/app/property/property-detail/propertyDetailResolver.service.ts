import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouteReuseStrategy, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Property } from "../property";
import { PropertyService } from "../property.service";


@Injectable({
  providedIn: 'root'
})

export class PropertyDetailResolverService implements Resolve<Property>
{

  constructor(private service: PropertyService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property> | Property {

    const propId = route.params['id'];
    return this.service.getProperty(+propId).pipe(
      catchError(error => { this.router.navigate(['/']); return of(null); })
    ) as unknown as Property;
  }

}
