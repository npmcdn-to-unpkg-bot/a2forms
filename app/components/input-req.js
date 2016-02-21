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
    var InputReqComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputReqComponent = (function () {
                function InputReqComponent() {
                }
                InputReqComponent.prototype.ngOnInit = function () {
                    if (!this.a)
                        throw new Error('a is required');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], InputReqComponent.prototype, "a", void 0);
                __decorate([
                    // Make this a required attribute. Throw an exception if it doesnt exist
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], InputReqComponent.prototype, "b", void 0);
                InputReqComponent = __decorate([
                    core_1.Component({
                        selector: 'input-req',
                        template: '<div>following is component which should throw error (@input value is not specified)<br/>component which required input a</div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputReqComponent);
                return InputReqComponent;
            })();
            exports_1("InputReqComponent", InputReqComponent);
        }
    }
});
//# sourceMappingURL=input-req.js.map