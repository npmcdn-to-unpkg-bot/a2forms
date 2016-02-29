import {Component,Input, SimpleChange, OnChanges } from 'angular2/core';


@Component({  
    selector:'ng-child',
  template: `
    <div>    firstname:{{firstName}}<br/>
    {{displayValue}}
  `
  
})
export class NgChangesChildComponent implements OnChanges{
  displayValue: string = 'no changes yet';
  @Input() firstName: string;
  @Input() lastName: string;
  
  constructor() {
    
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {      
    this.displayValue = 'ngOnChanges - firstName = ' + changes['firstName'].currentValue;
  }
}

@Component({  
  template: `
    <div>
    change firstName in parent <input type="text" [(ngModel)] = "firstName"/><br/>
    <div class="well"><ng-child [firstName]="firstName"></ng-child></div>
  `,
  directives:[NgChangesChildComponent]
  
})
export class NgChangesComponent{
  firstName:string = 'qqqq';
  constructor() {    
  }
   
}