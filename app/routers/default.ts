import {Component, Inject} from 'angular2/core';
import {RouterOutlet, RouteConfig,ComponentInstruction, CanDeactivate, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({    
    templateUrl:'../app/routers/default.html',    
    directives:[RouterOutlet, ROUTER_DIRECTIVES]    
})

export class DefaultComponent{

}