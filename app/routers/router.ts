import {Component, Inject} from 'angular2/core'; 
import {RouteConfig, ROUTER_DIRECTIVES, Location, Router} from 'angular2/router' 
import {DefaultComponent} from './default';
import {Child1Component} from './child1';  
import {Child2Component} from './child2'; 

@Component({ 
    selector: 'router', 
    templateUrl:'../app/routers/router.html', 
    directives:[ROUTER_DIRECTIVES] 
}) 

@RouteConfig([
  { path: '/',name:'Default', component: DefaultComponent, useAsDefault:true },
  { path: '/child1',name:'Child1', component: Child2Component}   ,
  { path: '/child2/:id',name:'Child2WithParams', component: Child2Component}
])


export class RouterComponent {  
    currentRouter: string
    constructor(private _router:Router){
             _router.subscribe((url) => this.currentRouter = url);
    }
}  
