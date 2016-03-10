System.register(['angular2/core', 'angular2/router', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1;
    var ChildFormComponent, ParentFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ChildFormComponent = (function () {
                function ChildFormComponent(_router) {
                    this._router = _router;
                }
                ChildFormComponent.prototype.ngOnInit = function () {
                    this.control.addControl('line1', new common_1.Control('', common_1.Validators.required));
                    this.control.addControl('line2', new common_1.Control('', common_1.Validators.required));
                };
                ChildFormComponent.prototype.ngOnChanges = function (changes) {
                    //this.displayValue = 'ngOnChanges - firstName = ' + changes['controlGroup'].currentValue;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', common_1.ControlGroup)
                ], ChildFormComponent.prototype, "control", void 0);
                ChildFormComponent = __decorate([
                    core_1.Component({
                        selector: 'child-form',
                        template: " <h2>Child</h2>\n    \n    <div class=\"field\">  \n      <label>Line1</label>  \n      <input type=\"text\" [ngFormControl]=\"control.controls['line1']\">\n    </div>\n    \n    <div class=\"field\">  \n      <label>Line2</label>  \n      <input type=\"text\" [ngFormControl]=\"control.controls['line2']\">\n    </div>",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ChildFormComponent);
                return ChildFormComponent;
            }());
            exports_1("ChildFormComponent", ChildFormComponent);
            ParentFormComponent = (function () {
                function ParentFormComponent(_router, fb, cdr) {
                    this._router = _router;
                    this.cdr = cdr;
                    this.parentForm = fb.group({
                        'firstName': new common_1.Control('', common_1.Validators.required),
                        'lastName': new common_1.Control('', common_1.Validators.required),
                        'address': fb.group({})
                    });
                }
                ParentFormComponent.prototype.ngOnInit = function () {
                    this.cdr.detectChanges();
                };
                Object.defineProperty(ParentFormComponent.prototype, "cgValue", {
                    get: function () {
                        return JSON.stringify(this.parentForm.value, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                ParentFormComponent = __decorate([
                    core_1.Component({
                        template: "<form  [ngFormModel]=\"parentForm\" class=\"form-horizontal\" id=\"myForm\" role=\"form\"> \n    <div class=\"col-md-7\"> \n       firstName: <input [ngFormControl]=\"parentForm.controls['firstName']\" #firstName=\"ngForm\"  type=\"text\" placeholder=\"FirstName\" class=\"form-control\">       \n    </div> \n    <div class=\"col-md-7\"> \n       lastName: <input [ngFormControl]=\"parentForm.controls['lastName']\" #lastName=\"ngForm\"  type=\"text\" placeholder=\"lastname\" class=\"form-control\">       \n    </div> \n    <child-form [control]=\"parentForm.controls.address\"></child-form>\n    <pre>{{cgValue}}</pre>\n</form> \n",
                        directives: [ChildFormComponent, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, common_1.FormBuilder, core_1.ChangeDetectorRef])
                ], ParentFormComponent);
                return ParentFormComponent;
            }());
            exports_1("ParentFormComponent", ParentFormComponent);
        }
    }
});
//# sourceMappingURL=parentChildForm.js.map