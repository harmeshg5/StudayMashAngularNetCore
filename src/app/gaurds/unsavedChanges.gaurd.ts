import { Component, Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { AddUserComponent } from "../DataSharing/Add-User/add-user.component";


export interface CanComponentLeave {
  canLeave: () => boolean;
}

@Injectable()
export class UnsavedChangesGaurd implements CanDeactivate<CanComponentLeave> {

  canDeactivate(component: CanComponentLeave) {

    if (component.canLeave) {
      return component.canLeave();
    }
    return true;
  }
}
