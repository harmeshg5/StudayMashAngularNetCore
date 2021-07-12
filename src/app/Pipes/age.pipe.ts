import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "agePipe"
})
export class AgePipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    let currentYear: any = new Date().getFullYear(); // 2021
    let userBirthYear: any = new Date(value).getFullYear();
    let uesrAge= currentYear- userBirthYear;
    return uesrAge;
  }
}
