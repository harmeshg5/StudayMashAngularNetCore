import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './Observables/observable/observable.component';
import { LearningComponent } from './learning/learning.component';
import { PromisesComponent } from './promises/promises.component';



const routes: Routes = [
  {
    path: '', component: LearningComponent, children: [
      { path: 'observable', component: ObservableComponent },
      { path: 'promises', component: PromisesComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class LearningRouteModule { }
