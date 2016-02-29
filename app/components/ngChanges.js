System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NgChangesChildComponent, NgChangesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgChangesChildComponent = (function () {
                function NgChangesChildComponent() {
                    this.displayValue = 'no changes yet';
                }
                NgChangesChildComponent.prototype.ngOnChanges = function (changes) {
                    this.displayValue = 'ngOnChanges - firstName = ' + changes['firstName'].currentValue;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NgChangesChildComponent.prototype, "firstName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NgChangesChildComponent.prototype, "lastName", void 0);
                NgChangesChildComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-child',
                        template: "\n    <div>    firstname:{{firstName}}<br/>\n    {{displayValue}}\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgChangesChildComponent);
                return NgChangesChildComponent;
            })();
            exports_1("NgChangesChildComponent", NgChangesChildComponent);
            NgChangesComponent = (function () {
                function NgChangesComponent() {
                    this.firstName = 'qqqq';
                }
                NgChangesComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div>\n    change firstName in parent <input type=\"text\" [(ngModel)] = \"firstName\"/><br/>\n    <div class=\"well\"><ng-child [firstName]=\"firstName\"></ng-child></div>\n  ",
                        directives: [NgChangesChildComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgChangesComponent);
                return NgChangesComponent;
            })();
            exports_1("NgChangesComponent", NgChangesComponent);
        }
    }
});
//# sourceMappingURL=ngChanges.js.map