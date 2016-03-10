System.register(['angular2/core', 'angular2/router', './defaultRouter', './child1', './child2'], function(exports_1, context_1) {
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
    var core_1, router_1, defaultRouter_1, child1_1, child2_1;
    var RouterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (defaultRouter_1_1) {
                defaultRouter_1 = defaultRouter_1_1;
            },
            function (child1_1_1) {
                child1_1 = child1_1_1;
            },
            function (child2_1_1) {
                child2_1 = child2_1_1;
            }],
        execute: function() {
            RouterComponent = (function () {
                function RouterComponent(_router) {
                    this._router = _router;
                }
                RouterComponent.prototype.gotoChild1 = function () {
                    this._router.navigate(['Child1']);
                };
                RouterComponent.prototype.goBack = function () {
                    this._router.navigateByUrl(this._prevInstruction.urlPath);
                };
                RouterComponent.prototype.routerOnActivate = function (next, prev) {
                    this._prevInstruction = prev;
                };
                RouterComponent = __decorate([
                    core_1.Component({
                        selector: 'router',
                        templateUrl: '../app/routers/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'DefaultRouter', component: defaultRouter_1.DefaultRouterComponent, useAsDefault: true },
                        { path: '/child1', name: 'Child1', component: child1_1.Child1Component },
                        { path: '/child2', name: 'Child2', component: child2_1.Child2Component },
                        { path: '/child2/:id', name: 'Child2WithParams', component: child2_1.Child2Component }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RouterComponent);
                return RouterComponent;
            }());
            exports_1("RouterComponent", RouterComponent);
        }
    }
});
//# sourceMappingURL=router.js.map