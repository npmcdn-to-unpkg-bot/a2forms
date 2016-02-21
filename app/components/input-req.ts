 import {Component, Input} from 'angular2/core';
 
 @Component({
    selector: 'input-req',
    template: '<div>following is component which should throw error (@input value is not specified)<br/>component which required input a</div>'
})
export class InputReqComponent {
    @Input() a:number; // Make this a required attribute. Throw an exception if it doesnt exist
    @Input() b:number;

    constructor(){}
    ngOnInit(){
        if (!this.a)
            throw new Error('a is required');
    }
}