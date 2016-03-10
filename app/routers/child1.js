System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Child1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Child1Component = (function () {
                function Child1Component(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.customerName = 'this is name';
                }
                Child1Component.prototype.childUpdated = function (value) {
                    alert(value + ' is from child11');
                };
                Child1Component.prototype.gotochild2 = function () {
                    this._router.navigate(['Child2']);
                };
                Child1Component.prototype.gotochild2WithParams = function () {
                    this._router.navigate(['Child2', { id: 123 }]);
                };
                Child1Component = __decorate([
                    core_1.Component({
                        templateUrl: '../app/routers/child1.html',
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], Child1Component);
                return Child1Component;
            }());
            exports_1("Child1Component", Child1Component);
        }
    }
});
//# sourceMappingURL=child1.js.map