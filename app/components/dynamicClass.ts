import {Component, Input,ChangeDetectionStrategy, } from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; //import everything

//The operators will be available. 
//When you use Observable class .. prefix it with Rx. ( Rx.Observable ) 

class TodoItem{
    description:string;
    isDone:boolean;
}
@Component({    
    template: `
    <ul>
        <li *ngFor="#todo of items" [class.isDone]="todo.isDone">{{todo.description}} - {{todo.isDone}}</li>
    </ul>
         `,
    styles: ['.isDone {color: green;font-weight: bold;}']        
})
export class DynamicClassComponent {
   items:Array<TodoItem> = [];
 
    constructor() { }
    ngOnInit() {
        for(var i=1;i<10;i++){
            this.items.push({description:'item..' + i, isDone:(i%2) == 0});
        }
  }
}

