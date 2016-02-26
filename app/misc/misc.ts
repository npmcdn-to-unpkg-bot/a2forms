import {Component, Inject, View, DynamicComponentLoader, ElementRef, Injector} from 'angular2/core'; 
import {RouteConfig, ROUTER_DIRECTIVES, Location, Router, RouterOutlet} from 'angular2/router' 
import {DefaultMiscComponent} from './defaultMisc';
import {ParentComponent, ChildComponent} from '../components/parentchildData';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'dynamic-component',
  template: 'Child'
})
class Child1Component {
}

@Component({ 
    selector: 'router', 
    templateUrl:'../app/misc/misc.html', 
    directives:[ROUTER_DIRECTIVES, RouterOutlet, Child1Component, ParentComponent] 
}) 

@RouteConfig([
  { path: '/',name:'DefaultMisc', component: DefaultMiscComponent, useAsDefault:true },
  
])


export class MiscComponent {  
    items:Array<any>;
     _dynamicComponentLoader: DynamicComponentLoader;   
      constructor(private _http:Http, dynamicComponentLoader: DynamicComponentLoader, 
                    private _elementRef: ElementRef, private injector:Injector) {     
          this._dynamicComponentLoader = dynamicComponentLoader;                  
      }               
    
    loadComponent(item, m){
        var component = System.import(item.component);
        this._dynamicComponentLoader.loadIntoLocation(m[item.component], this._elementRef, 'container')
        //this._dynamicComponentLoader.loadAsRoot(m[item.component],'#child', this.injector)
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
