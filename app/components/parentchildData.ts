import {Component, Input, Output, ChangeDetectionStrategy,EventEmitter, SimpleChange } from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; //import everything
import {Control} from 'angular2/common';
//The operators will be available. 
//When you use Observable class .. prefix it with Rx. ( Rx.Observable ) 

@Component({   
    selector:'input-test', 
    template: `<div class="well">
    <form (ngSubmit)="onSubmit()" #testform="ngForm">
        {{name}}
        <textarea #textarea [(ngModel)]="childvar" (ngModelChange)="childvarChange.emit($event)" ></textarea>              
    </form>
    </div>
         `            
})
export class ChildComponent { 
    @Output() childvarChange:EventEmitter<String> = new EventEmitter<String>();
    @Input() childvar:string;
    displayValue: string = 'no changes yet!';
   constructor() {}   
   
   onSubmit(){
       
   }    
   
    ngOnChanges(changes: {[propName: string]: SimpleChange}) {      
    
  }
}


@Component({    
    template: `
    <div>
        text entered in child component: {{parentVar}}
        <hr/>
        <input-test [(childvar)]="parentVar"></input-test>
    </div>
         `  ,
         directives:[ChildComponent]    
})
export class ParentComponent {
   parentVar:string = null;
}

