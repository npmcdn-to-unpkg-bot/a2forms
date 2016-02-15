import {Component} from 'angular2/core';
import {FormBuilderComponent} from './formbuilder';
@Component({
    selector: 'my-app',
    template: '<div>fgfgjgf<form-builder></form-builder></div>',
    directives:[FormBuilderComponent]
})

export class AppComponent { }