import {Component, Inject} from 'angular2/core'; 
import {RouteConfig, ROUTER_DIRECTIVES, Location, Router, RouterOutlet} from 'angular2/router' 
import {DefaultMiscComponent} from './defaultMisc';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({ 
    selector: 'router', 
    templateUrl:'../app/misc/misc.html', 
    directives:[ROUTER_DIRECTIVES, RouterOutlet] 
}) 

@RouteConfig([
  { path: '/',name:'DefaultMisc', component: DefaultMiscComponent, useAsDefault:true },
  
])


export class MiscComponent {  
    items:Array<any>;
    constructor(private _http:Http){
      
    }             
    
    itemSelected(item){
        alert(item.displayText);
    }
    ngOnInit(){
          this._http.get('./app/data.json')      
               .map(res => res.json())
               .subscribe(data => this.items = data.items);
    }
        
}  
