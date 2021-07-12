import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './auth.gaurd';
import { AddUserComponent } from './DataSharing/Add-User/add-user.component';
import { AddressComponent } from './DataSharing/Address/address.component';
import { ChildComponent } from './DataSharing/Child/child-component';
import { CompanyComponent } from './DataSharing/Company/company.component';
import { ParentComponent } from './DataSharing/Parent/parent-component';
import { UserComponent } from './DataSharing/User/user.component';
import { AdminGaurd } from './gaurds/admin.gaurd';
import { UnsavedChangesGaurd } from './gaurds/unsavedChanges.gaurd';
import { LearningComponent } from './Learning/learning/learning.component';
import { ProductListComponent } from './Product/ProductList/productList.component';
import { AddPropertyComponent } from './property/add-property/addProperty.component';
import { PropertyDetailComponent } from './property/property-detail/propertyDetail.component';
import { PropertyDetailResolverService } from './property/property-detail/propertyDetailResolver.service';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserLoginComponent } from './property/user/user-login/userLogin.component';
import { UserRegisterComponent } from './property/user/user-register/userRegister.component';
import { RxjsComponent } from './RxJsPractice/rxjs/rxjs.component';

const routes: Routes = [
  { path: "", component: PropertyListComponent },
  { path: "productList", component: ProductListComponent },
  { path: 'propertyDetail/:id', component: PropertyDetailComponent, resolve: { prp: PropertyDetailResolverService } },
  { path: 'addProperty', component: AddPropertyComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: "rxjs", component: RxjsComponent },
  { path: "parentComp", component: ParentComponent, canActivate: [AuthGaurd] },
  { path: "childComp", component: ChildComponent },
  {
    path: 'user/:id/:name', component: UserComponent, canActivateChild: [AdminGaurd],
    canActivate: [AuthGaurd],
    children:
      [
        // { path: '', redirectTo: 'address', pathMatch: 'full' },
        { path: 'address', component: AddressComponent },
        { path: 'company', component: CompanyComponent }
      ]
  },

  { path: 'addUser', component: AddUserComponent, canDeactivate: [UnsavedChangesGaurd] },

  { path: "learning", loadChildren: () => import(`./Learning/learning.module`).then(x => x.LearningModule) },
  { path: "**", component: PropertyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
