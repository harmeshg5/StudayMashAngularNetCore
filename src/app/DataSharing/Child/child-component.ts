import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";



@Component({
  selector: 'child-component',
  templateUrl: 'child-component.html',
  styleUrls: [],
  providers: []
})

export class ChildComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  @Input() userName: string = '';

  @Output() childUserName: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.childUserName.emit("Child aa gya hai.");
  }

}
