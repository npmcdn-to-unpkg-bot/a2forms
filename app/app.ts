import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {FormComponent} from './forms/form';
import {RouterComponent} from './routers/router';
import {MiscComponent} from './misc/misc';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    templateUrl: '../app/app.html',
    directives:[ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path:'/forms/...', name: 'Forms',component:FormComponent},   
  { path:'/router/...', name: 'Router',component:RouterComponent},
  { path:'/misc/...', name: 'Misc',component:MiscComponent}
])
export class AppComponent {
    currentRouter: string;
    code: string;
    constructor(private _router: Router, private _http: Http){
        _router.subscribe((url) => this.currentRouter = url);
        this.code="dsgdgs";
    }
    
     ngOnInit(){
          this._http.get('./app/app.ts')      
               .map(res => res.text())
               .subscribe(data => this.code = data);
    }
 }