import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from "@kolkov/ngx-gallery";
import { IPropertyBase } from "../ipropertybase";
import { Property } from "../property";
import { PropertyService } from "../property.service";


@Component({
  selector: ' propertyDetail',
  templateUrl: 'propertyDetail.component.html',
  providers: [],
  styleUrls: ['propertyDetail.component.css']
})

export class PropertyDetailComponent implements OnInit {

  public id?: number;
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor(private activateRoute: ActivatedRoute, private router: Router, private service: PropertyService) { }

  ngOnInit() {

    this.displayImages();
    this.activateRoute.snapshot.params['id'];

    this.activateRoute.data.subscribe((data) => {
      console.log('data[prp]');
      console.log(data['prp']);
      this.property = <Property>data['prp'];
    })

    // this.id = Number(this.activateRoute.snapshot.params['id']);
    // this.activateRoute.params.subscribe((params) => {
    //   this.id = + params['id'];
    //   this.service.getProperty(this.id).subscribe(data => {
    //     this.property = <Property>data;
    //   });
    // });
  }


  displayImages() {

    this.galleryOptions = [
      {
        width: '100%',
        height: '470px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/Images/Default.jpg',
        medium: 'assets/Images/Default.jpg',
        big: 'assets/Images/Default.jpg'
      },
      {
        small: 'assets/Images/House_1.jpg',
        medium: 'assets/Images/House_1.jpg',
        big: 'assets/Images/House_1.jpg'
      }, {
        small: 'assets/Images/House_2.jpg',
        medium: 'assets/Images/House_2.jpg',
        big: 'assets/Images/House_2.jpg'
      }, {
        small: 'assets/Images/House_3.jpg',
        medium: 'assets/Images/House_3.jpg',
        big: 'assets/Images/House_3.jpg'
      }, {
        small: 'assets/Images/Default.jpg',
        medium: 'assets/Images/Default.jpg',
        big: 'assets/Images/Default.jpg'
      }, {
        small: 'assets/Images/Default.jpg',
        medium: 'assets/Images/Default.jpg',
        big: 'assets/Images/Default.jpg'
      }
    ];

  }

}
