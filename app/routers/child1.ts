import {Component, Inject} from 'angular2/core';
import {RouterOutlet, RouteConfig,ComponentInstruction, CanDeactivate, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({    
    templateUrl:'./child1.html',
    directives:[RouterOutlet, ROUTER_DIRECTIVES]    
})

// @RouteConfig([
//   { path: '/',name:'Child1', component: Child1Component, useAsDefault:true }
// 
// ])

export class Child1Component{

}