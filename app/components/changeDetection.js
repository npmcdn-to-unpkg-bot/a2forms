System.register(['angular2/core', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var Loading, ChangeDetectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            Loading = (function () {
                function Loading() {
                    var _this = this;
                    // try to change this from component after 5 seconds
                    // test this with commenting changeDetection
                    setTimeout(function () {
                        _this.loadingMessage = "test";
                    }, 5000);
                }
                __decorate([
                    core_1.Input('status'), 
                    __metadata('design:type', Object)
                ], Loading.prototype, "loadingMessage", void 0);
                Loading = __decorate([
                    core_1.Component({
                        selector: 'loading',
                        template: '{{loadingMessage}}'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Loading);
                return Loading;
            })();
            exports_1("Loading", Loading);
            ChangeDetectionComponent = (function () {
                function ChangeDetectionComponent() {
                    this.loadingMessage = "Wait for it...";
                }
                ChangeDetectionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Pretend we're loading data from a service.
                    // This component is only interested in the call's success
                    Observable_1.Observable.of(true)
                        .delay(2000)
                        .subscribe(function (success) {
                        if (success) {
                            console.log('Pretend loading: success!');
                            _this.loadingMessage = 'Success!';
                        }
                    });
                };
                ChangeDetectionComponent = __decorate([
                    core_1.Component({
                        selector: 'change-detection',
                        template: "<p>ChangeDetectionStrategy.OnPush only works when [input] properties are changed</p>\n                <p>Uncomment changeDetection: ChangeDetectionStrategy.OnPush in loading component to see the behavior</p><br/>Are we loading?: <loading [status]=\"loadingMessage\"></loading>",
                        directives: [Loading]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChangeDetectionComponent);
                return ChangeDetectionComponent;
            })();
            exports_1("ChangeDetectionComponent", ChangeDetectionComponent);
        }
    }
});
//# sourceMappingURL=changeDetection.js.map