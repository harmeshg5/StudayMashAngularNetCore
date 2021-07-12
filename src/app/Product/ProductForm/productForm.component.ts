import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IProduct } from "../IProduct";



@Component({

  selector: 'productForm',
  templateUrl: 'productForm.component.html',
  styleUrls: [],
  providers: []
})

export class ProductFormComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {

  }


  @ViewChild('productForm', { static: true }) public productForm: NgForm | undefined;
  @Output() product = new EventEmitter<IProduct>();


  productField: IProduct = {} as IProduct;
  value: IProduct = {} as IProduct;
  productList: IProduct[] = [];



  SubmitForm() {
    this.product.emit(this.productField);
  }
}
