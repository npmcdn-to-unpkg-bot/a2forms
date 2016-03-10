System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var UnlessDirective, InputReqComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective(_templateRef, _viewContainerRef) {
                    this._templateRef = _templateRef;
                    this._viewContainerRef = _viewContainerRef;
                }
                Object.defineProperty(UnlessDirective.prototype, "unless", {
                    set: function (condition) {
                        !condition ? this._viewContainerRef.createEmbeddedView(this._templateRef)
                            : this._viewContainerRef.clear();
                    },
                    enumerable: true,
                    configurable: true
                });
                UnlessDirective = __decorate([
                    core_2.Directive({
                        selector: '[unless]',
                        //inputs: ['givenBoolean : myDirectiveFunction']
                        inputs: ['unless']
                    }), 
                    __metadata('design:paramtypes', [core_2.TemplateRef, core_2.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            }());
            exports_1("UnlessDirective", UnlessDirective);
            InputReqComponent = (function () {
                function InputReqComponent() {
                }
                InputReqComponent.prototype.ngOnInit = function () {
                    // if (!this.a)
                    //     throw new Error('a is required');
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
                        template: "\n        <div>following is component which should throw error \n        (@input value is not specified)<br/>component which required input a\n            <hr/>\n            <div name=\"customDirective\">\n                <h2>Custom Directive</h2>\n                <div>\n                    Enter true or false:\n                    <br/>\n                    <input type=\"text\" #condition (keyup)=\"0\"/>\n                    <div *unless=\"condition.value!='false'\">\n                        Only shown if 'false' was enterded!\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                        directives: [UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputReqComponent);
                return InputReqComponent;
            }());
            exports_1("InputReqComponent", InputReqComponent);
        }
    }
});
//# sourceMappingURL=input-req.js.map