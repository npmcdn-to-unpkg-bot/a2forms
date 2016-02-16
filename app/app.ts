import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {FormComponent} from './forms/form';
import {RouterComponent} from './routers/router';

@Component({
    selector: 'my-app',
    templateUrl: '../app/app.html',
    directives:[ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path:'/forms/...', name: 'Forms',component:FormComponent},   
  { path:'/router/...', name: 'Router',component:RouterComponent}
])
export class AppComponent {
    currentRouter: string
    constructor(private _router: Router){
        _router.subscribe((url) => this.currentRouter = url);
    }
 }