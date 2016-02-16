import {Component, Inject} from 'angular2/core';
import {RouterOutlet, Router, RouteConfig,ComponentInstruction, CanDeactivate, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({    
    templateUrl:'../app/routers/defaultRouter.html',    
    directives:[RouterOutlet, ROUTER_DIRECTIVES]    
})

export class DefaultRouterComponent{
    constructor(private _router: Router){        
    }    
}