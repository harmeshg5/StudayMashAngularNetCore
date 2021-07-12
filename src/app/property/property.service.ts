import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Ikeyvaluepair } from "./IKeyValuePair";
import { IProperty } from "./IProperty.interface";
import { IPropertyBase } from "./ipropertybase";
import { Property } from "./property";


@Injectable({
  providedIn: 'root'
})
export class PropertyService implements OnInit {

  baseUrl = environment.baseUrl;
  //baseUrl = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    console.log(SellRent);
    return this.httpClient.get('data/properties.json').pipe
      (
        map(data => {
          console.log('SellRent');
          console.log(data);
          const propertysArray: Array<Property> = [];
          const localProperty = JSON.parse(localStorage.getItem('newProp')!);// Array<IPropertyBase> = [];
          console.log('data');
          console.log(localProperty);
          if (localProperty) {
            for (const Id in data) {
              var d = data as Array<Property>;
              if (SellRent) {
                console.log('in sellrent');
                if (data.hasOwnProperty(Id) && d[Number(Id)].sellRent === SellRent) {
                  var x = Number(Id);
                  //return data as Array<IProperty>;

                  propertysArray.push(d[Number(Id)]);
                }
                else {
                  propertysArray.push(d[Number(Id)]);
                }
              }
            }
          }


          for (const Id in data) {
            console.log('data123');
            var d = data as Array<Property>;
            if (SellRent) {
              console.log(d[Number(Id)]);
              if (data.hasOwnProperty(Id) && d[Number(Id)].sellRent === SellRent) {
                var x = Number(Id);
                //return data as Array<IProperty>;

                propertysArray.push(d[Number(Id)]);
              }
            }
            else {
              propertysArray.push(d[Number(Id)]);
            }
          }
          console.log('final');
          console.log(propertysArray);
          return propertysArray as Array<Property>;
          //return propertysArray;
        })
      );
  }

  getProperty(id: number) {
    //return of(); //this.httpClient.get<Property>(this.baseUrl + '/property/detail/' + id.toString());

    return this.getAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.id === id);
      })
    )
  }

  getAllCities(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/City');
    return of(); //this.httpClient.get<string[]>(this.baseUrl + '/city/cities');
  }

  getPropertyTypes(): Observable<Ikeyvaluepair[]> {
    return of(); //this.httpClient.get<Ikeyvaluepair[]>(this.baseUrl + '/propertytype/list');
  }

  getFurnishingTypes(): Observable<Ikeyvaluepair[]> {
    return of(); //this.httpClient.get<Ikeyvaluepair[]>(this.baseUrl + '/furnishingtype/list');
  }



  getAllProperties1(SellRent?: number): Observable<Property[]> {
    return of(); //this.httpClient.get<Property[]>(this.baseUrl + '/property/list/' + SellRent!.toString());
  }
  addProperty(property: Property) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     Authorization: 'Bearer ' + localStorage.getItem('token')
    //   })
    // };
    // return of(); //this.httpClient.post(this.baseUrl + '/property/add', property, httpOptions);

    let newProp = [property];
    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp')!)];
    }
    localStorage.setItem('newProp', JSON.stringify(property));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID')! + 1));
      return +localStorage.getItem('PID')!;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

  getPropertyAge(dateofEstablishment: string): string {
    const today = new Date();
    const estDate = new Date(dateofEstablishment);
    let age = today.getFullYear() - estDate.getFullYear();
    const m = today.getMonth() - estDate.getMonth();

    // Current month smaller than establishment month or
    // Same month but current date smaller than establishment date
    if (m < 0 || (m === 0 && today.getDate() < estDate.getDate())) {
      age--;
    }

    // Establshment date is future date
    if (today < estDate) {
      return '0';
    }

    // Age is less than a year
    if (age === 0) {
      return 'Less than a year';
    }

    return age.toString();
  }

}
