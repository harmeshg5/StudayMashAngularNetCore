import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LearningComponent } from './Learning/learning/learning.component';
import { LearningNavBarComponent } from './Learning/learning-nav-bar/learning-nav-bar.component';
import { ParentComponent } from './DataSharing/Parent/parent-component';
import { ChildComponent } from './DataSharing/Child/child-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './Pipes/age.pipe';
import { userService } from './Services/user.service';
import { UserComponent } from './DataSharing/User/user.component';
import { CompanyComponent } from './DataSharing/Company/company.component';
import { AddressComponent } from './DataSharing/Address/address.component';
import { AuthGaurd } from './auth.gaurd';
import { AuthService } from './auth.service';
import { AdminGaurd } from './gaurds/admin.gaurd';
import { AddUserComponent } from './DataSharing/Add-User/add-user.component';
import { UnsavedChangesGaurd } from './gaurds/unsavedChanges.gaurd';
import { RxjsComponent } from './RxJsPractice/rxjs/rxjs.component';
import { ProductModule } from './Product/product.module';
import { EmployeeComponent } from './Employees/employee.component';
import { EmployeesComponent } from './Employees/employees.component';
import { EmployeeService } from './Services/employee.service';
import { PropertyService } from './property/property.service';
import { AddPropertyComponent } from './property/add-property/addProperty.component';
import { PropertyDetailComponent } from './property/property-detail/propertyDetail.component';
import { UserLoginComponent } from './property/user/user-login/userLogin.component';
import { UserRegisterComponent } from './property/user/user-register/userRegister.component';
import { PropertyUserService } from './property/user.service';
import { AlertyfyService } from './Services/alertyfy.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { FilterPipe } from './property/Pipes/filter.pipe';
import { SortPipe } from './property/Pipes/sort.pipe';
import { PropertyDetailResolverService } from './property/property-detail/propertyDetailResolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';



//import { NgxGalleryModule } from '@kolkov/ngx-gallery';


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    LearningComponent,
    LearningNavBarComponent,
    ParentComponent,
    ChildComponent,
    UserComponent,
    CompanyComponent,
    AddressComponent,
    AddUserComponent,
    EmployeeComponent,
    EmployeesComponent,
    AgePipe,
    RxjsComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    FilterPipe,
    SortPipe,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
    //NgxGalleryModule
  ],
  providers: [userService, AuthGaurd, AuthService, AdminGaurd, UnsavedChangesGaurd, EmployeeService, PropertyService, PropertyUserService, AlertyfyService,
    DatePipe, PropertyDetailResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
