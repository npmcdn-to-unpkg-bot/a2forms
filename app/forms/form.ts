import {Component, Inject} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Location, Router, RouterOutlet} from 'angular2/router'
import {DefaultFormComponent} from './defaultForm';
import {FormBuilderComponent} from './formbuilder';
import {NgFormStuffComponent} from './ngFormStuff';
import {NgFormModelStuffComponent} from './ngFormModelStuff';
import {TemplateFormComponent} from './templateform';
import {ParentFormComponent} from './parentChildForm';
@Component({
    selector: 'router',
    templateUrl: '../app/forms/form.html',
    directives: [ROUTER_DIRECTIVES, RouterOutlet]
})

@RouteConfig([
    { path: '/', name: 'DefaultForm', component: DefaultFormComponent, useAsDefault: true },
    { path: '/formbuilder', name: 'FormBuilder', component: FormBuilderComponent },
    { path: '/parentChildForm', name: 'ParentChildForm', component: ParentFormComponent },
    { path: '/ngStuff', name: 'NgFormStuffComponent', component: NgFormStuffComponent },
    { path: '/ngFormModelStuff', name: 'NgFormModelStuffComponent', component: NgFormModelStuffComponent },
    { path: '/templateForm', name: 'TemplateForm', component: TemplateFormComponent }
])


export class FormComponent {
    constructor(private _router: Router) {
    }
}  
