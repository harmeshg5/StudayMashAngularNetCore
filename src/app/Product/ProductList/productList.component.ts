import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "../IProduct";


@Component({
  selector: 'productList',
  templateUrl: 'productList.component.html',
  providers: [],
  styleUrls: []
})

export class ProductListComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  productList: IProduct[] = [{ productCode: "123", productName: "Nokia", productDescription: "Smart phone", id: 1 }];
  @Input() item?: string;

  itemArray = ["item1", "item2"];

  setProductList(product: any) {
    console.log('Getting the data -this.productField');
    console.log(product);
    this.productList.push(product);
    //this.itemArray.push(item);
  }

  editRecord(product: any) {
    console.log(product);
  }

}
