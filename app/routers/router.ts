import {Component, Inject} from 'angular2/core'; 
import {RouteConfig, ROUTER_DIRECTIVES, Location, Router, RouterOutlet} from 'angular2/router' 
import {DefaultRouterComponent} from './defaultRouter';
import {Child1Component} from './child1';  
import {Child2Component} from './child2'; 

@Component({ 
    selector: 'router', 
    templateUrl:'../app/routers/router.html', 
    directives:[ROUTER_DIRECTIVES, RouterOutlet] 
}) 

@RouteConfig([
  { path: '/',name:'DefaultRouter', component: DefaultRouterComponent, useAsDefault:true },
  { path: '/child1',name:'Child1', component: Child1Component},
  { path: '/child2',name:'Child2', component: Child2Component},
  { path: '/child2/:id',name:'Child2WithParams', component: Child2Component}
])


export class RouterComponent {  
   
    constructor(private _router:Router){             
    }
    
    gotoChild1(){        
        this._router.navigate( ['Child1']  );  
    }
}  
