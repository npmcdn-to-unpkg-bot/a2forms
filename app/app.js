System.register(['angular2/core', 'angular2/router', './forms/form', './routers/router', './misc/misc', 'angular2/http', 'rxjs/add/operator/map', './LoggedInOutlet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, form_1, router_2, misc_1, http_1, LoggedInOutlet_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (misc_1_1) {
                misc_1 = misc_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (LoggedInOutlet_1_1) {
                LoggedInOutlet_1 = LoggedInOutlet_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _http) {
                    var _this = this;
                    this._router = _router;
                    this._http = _http;
                    _router.subscribe(function (url) { return _this.currentRouter = url; });
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._http.get('./app/app.ts')
                        .map(function (res) { return res.text(); })
                        .subscribe(function (data) { return _this.code = data; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '../app/app.html',
                        directives: [LoggedInOutlet_1.LoggedInRouterOutlet, router_1.RouterLink]
                    }),
                    router_1.RouteConfig([
                        { path: '/misc/...', name: 'Misc', component: misc_1.MiscComponent },
                        { path: '/forms/...', name: 'Forms', component: form_1.FormComponent },
                        { path: '/router/...', name: 'Router', component: router_2.RouterComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map