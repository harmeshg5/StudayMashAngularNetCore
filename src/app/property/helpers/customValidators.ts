import { AbstractControl, ValidatorFn } from "@angular/forms";



export default class customValidators {

  static matchingPasswords = (control: AbstractControl): { [key: string]: boolean } => {

    const newPassword = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    // if no values, valid
    if (!newPassword || !confirmPassword) {
      return null as any;
    }
    // if values match return null, else 'mismatchedPasswords:true'
    return newPassword.value === confirmPassword.value ? null as any : { mismatchedPasswords: true };
  }

}
