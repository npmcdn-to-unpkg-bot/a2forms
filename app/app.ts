import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, AsyncRoute} from 'angular2/router';
import {FormComponent} from './forms/form';
import {RouterComponent} from './routers/router';
import {MiscComponent} from './misc/misc';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {LoggedInRouterOutlet} from './LoggedInOutlet';

@Component({
    selector: 'my-app',
    templateUrl: '../app/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/misc/...', name: 'Misc', component: MiscComponent },
    { path: '/forms/...', name: 'Forms', component: FormComponent },
    { path: '/router/...', name: 'Router', component: RouterComponent }
])
// @RouteConfig([
//   new AsyncRoute({ path:'/forms/...', name: 'Forms', loader:()=>Promise.resolve(FormComponent)}),   
//   { path:'/router/...', name: 'Router',component:RouterComponent},
//   { path:'/misc/...', name: 'Misc',component:MiscComponent}
// ])
export class AppComponent {
    currentRouter: string;
    code: string;
    constructor(private _router: Router, private _http: Http) {
        _router.subscribe((url) => this.currentRouter = url);
    }

    ngOnInit() {
        this._http.get('./app/app.ts')
            .map(res => res.text())
            .subscribe(data => this.code = data);
    }
}