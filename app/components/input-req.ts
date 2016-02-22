import {Component, Input} from 'angular2/core';


import {Directive, TemplateRef, ViewContainerRef} from 'angular2/core';

@Directive({
    selector: '[unless]',
    //inputs: ['givenBoolean : myDirectiveFunction']
    inputs:['unless']
})

export class UnlessDirective {
    private _templateRef: TemplateRef;
    private _viewContainerRef: ViewContainerRef;


    constructor(_templateRef: TemplateRef, _viewContainerRef: ViewContainerRef) {
        this._templateRef = _templateRef;
        this._viewContainerRef = _viewContainerRef;
    }

    set unless(condition: boolean) {
        !condition ? this._viewContainerRef.createEmbeddedView(this._templateRef)
            : this._viewContainerRef.clear();
    }
}

@Component({
    selector: 'input-req',
    template: `
        <div>following is component which should throw error 
        (@input value is not specified)<br/>component which required input a
            <hr/>
            <div name="customDirective">
                <h2>Custom Directive</h2>
                <div>
                    Enter true or false:
                    <br/>
                    <input type="text" #condition (keyup)="0"/>
                    <div *unless="condition.value!='false'">
                        Only shown if 'false' was enterded!
                    </div>
                </div>
            </div>
        </div>
    `,
    directives:[UnlessDirective]
})
export class InputReqComponent {
    @Input() a: number; // Make this a required attribute. Throw an exception if it doesnt exist
    @Input() b: number;

    constructor() { }
    ngOnInit() {
        // if (!this.a)
        //     throw new Error('a is required');
    }
}

