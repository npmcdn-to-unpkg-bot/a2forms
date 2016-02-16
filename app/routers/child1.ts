import {Component, Inject} from 'angular2/core';
import {RouterOutlet, Router, RouteParams, RouteConfig,ComponentInstruction, CanDeactivate, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({    
    templateUrl:'../app/routers/child1.html',  
    directives:[RouterOutlet, ROUTER_DIRECTIVES]    
})


// @CanActivate((next, prev)=>{return confirm('navigating to child1');}) 

export class Child1Component  {  

    public customerName: string = 'this is name'; 
    constructor(private _router: Router, private _routeParams: RouteParams){ 
    }     

   childUpdated(value: any){ 
       alert(value + ' is from child11'); 
   } 

   gotochild2(){ 
        this._router.navigate(['Child2']); 
    } 

    gotochild2WithParams(){ 
        this._router.navigate(['Child2',{id:123}]); 
    } 
} 
