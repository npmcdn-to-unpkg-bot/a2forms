System.register(['angular2/core', 'angular2/router', './defaultMisc', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, defaultMisc_1, http_1;
    var MiscComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (defaultMisc_1_1) {
                defaultMisc_1 = defaultMisc_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            MiscComponent = (function () {
                function MiscComponent(_http) {
                    this._http = _http;
                }
                MiscComponent.prototype.itemSelected = function (item) {
                    alert(item.displayText);
                };
                MiscComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._http.get('./app/data.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.items = data.items; });
                };
                MiscComponent = __decorate([
                    core_1.Component({
                        selector: 'router',
                        templateUrl: '../app/misc/misc.html',
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'DefaultMisc', component: defaultMisc_1.DefaultMiscComponent, useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MiscComponent);
                return MiscComponent;
            })();
            exports_1("MiscComponent", MiscComponent);
        }
    }
});
//# sourceMappingURL=misc.js.map