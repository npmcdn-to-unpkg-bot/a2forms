System.register(['angular2/core', 'angular2/router'], function(exports_1) {
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
    var Child2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Child2Component = (function () {
                function Child2Component(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                //   routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) { 
                //       return confirm('Are you sure you want to leave?'); 
                //   } 
                Child2Component.prototype.ngOnInit = function () {
                    var q = this._routeParams.params["id"];
                    this.paramValue = q ? q : 'no params...';
                };
                Child2Component = __decorate([
                    core_1.Component({
                        templateUrl: './child2.html',
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], Child2Component);
                return Child2Component;
            })();
            exports_1("Child2Component", Child2Component);
        }
    }
});
//# sourceMappingURL=child2.js.map