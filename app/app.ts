import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FormBuilderComponent} from './formbuilder';

@Component({
    selector: 'my-app',
    templateUrl: '../app/app.html',
    directives:[ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path:'/formbuilder', name: 'Formbuilder',component:FormBuilderComponent}   
])
export class AppComponent { }