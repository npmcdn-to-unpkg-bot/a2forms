import {Component, Inject} from 'angular2/core';
import {RouterOutlet, Router, RouteConfig,ComponentInstruction, CanDeactivate} from 'angular2/router'

@Component({    
    templateUrl:'../app/forms/defaultForm.html'
})


export class DefaultFormComponent{
    constructor(private _router: Router){
        
    }    
}