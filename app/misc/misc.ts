import {Component, Inject, View, DynamicComponentLoader, ElementRef} from 'angular2/core'; 
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
     _dynamicComponentLoader: DynamicComponentLoader;   
      constructor(private _http:Http, dynamicComponentLoader: DynamicComponentLoader, 
                    private _elementRef: ElementRef) {     
          this._dynamicComponentLoader = dynamicComponentLoader;                  
      }               
    
    loadComponent(item, m){
        var component = System.import(item.component);
        this._dynamicComponentLoader.loadIntoLocation(m[item.component], this._elementRef, 'container')
    }
    itemSelected(item){        
        System.import(item.path).then(m=>this.loadComponent(item, m),console.error.bind(console));
    }
    ngOnInit(){
          this._http.get('./app/data.json')      
               .map(res => res.json())
               .subscribe(data => this.items = data.items);
    }
        
}  
