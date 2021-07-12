import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SimpleForm } from "../FormPractice/SimpleForm/simpleForm.component";
import { TemplateDrivenFormComponent } from "../FormPractice/TemplateDrivenForms/templateDrivenForm.component";
import { ProductFormComponent } from "./ProductForm/productForm.component";
import { ProductListComponent } from "./ProductList/productList.component";



@NgModule({

  imports: [FormsModule, CommonModule],
  providers: [],
  declarations: [ProductListComponent, ProductFormComponent, SimpleForm, TemplateDrivenFormComponent],
  exports: [ProductFormComponent, ProductListComponent, SimpleForm, TemplateDrivenFormComponent]
})

export class ProductModule {

}


