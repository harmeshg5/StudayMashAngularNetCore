
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { IProperty } from '../IProperty.interface';
import { IPropertyBase } from '../ipropertybase';
import { PropertyService } from '../property.service';
import { FilterPipe } from '../Pipes/filter.pipe';
import { SortPipe } from '../Pipes/sort.pipe';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  PropertLyList: Array<IProperty> = [];
  SellRent = 1;
  properties?: IPropertyBase[];
  City = '';
  SearchCity = '';
  SortByParam = '';
  SortDirection = 'asc';
  constructor(private service: PropertyService) { }

  ngOnInit(): void {
    console.log('porp list');
    this.service.getAllProperties(this.SellRent).subscribe(
      (data) => {
        console.log('this.PropertLyList');

        this.PropertLyList = data as [];
        this.properties = data;
        const newProperty = JSON.parse(localStorage.getItem('newProp')!);
        if (newProperty) {
          if (newProperty.SellRent === this.SellRent) {
            this.properties = [newProperty, ...this.properties];
          }
          console.log(this.PropertLyList);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc')
      this.SortDirection = 'asc';
    else
      this.SortDirection = 'desc';
  }

}
