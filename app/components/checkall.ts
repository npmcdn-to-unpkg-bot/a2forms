import {Component, Input,ChangeDetectionStrategy, } from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; //import everything
import {Control} from 'angular2/common';
//The operators will be available. 
//When you use Observable class .. prefix it with Rx. ( Rx.Observable ) 

class TodoItem{
    description:string;
    isDone:boolean;
    isChecked:boolean;
}
@Component({    
    template: `
    <div><input type="checkbox" [ngFormControl]="allCtrl"/>checkall</div>
    <ul>
        <li *ngFor="#todo of items" [class.isDone]="todo.isDone">
        <input type="checkbox" [checked]="todo.isChecked"/>{{todo.description}} - {{todo.isDone}}</li>
    </ul>
         `,
    styles: ['.isDone {color: green;font-weight: bold;}']        
})
export class CheckAllComponent {
    items:Array<TodoItem> = [];
    allCtrl: Control;
    constructor() {
        this.allCtrl = new Control();
        this.allCtrl.valueChanges.subscribe(
            (val) => {
            this.items.forEach((item) => {
                item.isChecked = val;
            });
            });
     }
    ngOnInit() {
    for(var i=1;i<10;i++){
            this.items.push({description:'item..' + i, isDone:(i%2) == 0, isChecked:false});
        }
  }
}

