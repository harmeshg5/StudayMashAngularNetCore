import { NgModule } from "@angular/core";
import { LearningNavBarComponent } from "./learning-nav-bar/learning-nav-bar.component";
import { LearningRouteModule } from "./learning-Route.module";
import { ObservableComponent } from "./Observables/observable/observable.component";
import { PromisesComponent } from "./promises/promises.component";




@NgModule({
  imports: [LearningRouteModule],
  exports: [],
  declarations: [ObservableComponent, PromisesComponent],
  providers: []
})

export class LearningModule { }
