import {Component, Inject} from 'angular2/core';
import {RouterOutlet, Router, RouteParams, RouteConfig,ComponentInstruction, CanDeactivate, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({    
    templateUrl:'./child2.html',
    directives:[RouterOutlet, ROUTER_DIRECTIVES]    
})

// @RouteConfig([
//   { path: '/',name:'Child1', component: Child1Component, useAsDefault:true }
// 
// ])


export class Child2Component   {  
    public paramValue: string; 
   constructor(private _router: Router, private _routeParams: RouteParams){ 
    } 


//   routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) { 
//       return confirm('Are you sure you want to leave?'); 
//   } 

    ngOnInit() { 
        var q = this._routeParams.params["id"]; 
        this.paramValue = q ? q : 'no params...'; 
    } 

} 

