import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'templateDrivenForm',
  templateUrl: 'templateDrivenForm.component.html'
})

export class TemplateDrivenFormComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  public bookTitle?: string;
  public bookAuthor?: string;
  public bookNoOfPages?: number;

}
