System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var NgFormStuffComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NgFormStuffComponent = (function () {
                function NgFormStuffComponent() {
                }
                NgFormStuffComponent.prototype.valueOf = function (cg) {
                    if (cg.control == null) {
                        return null;
                    }
                    return JSON.stringify(cg.control.value, null, 2);
                };
                NgFormStuffComponent.prototype.onSubmit = function (val) {
                    console.log(val);
                };
                NgFormStuffComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>using NgControlGroup</h2>\n    <div>      \n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n        <div ngControlGroup=\"name\" #cgName=\"ngForm\">\n          <h3>Enter your name:</h3>\n          <p>First: <input ngControl=\"first\" required></p>\n          <p>Middle: <input ngControl=\"middle\"></p>\n          <p>Last: <input ngControl=\"last\" required></p>\n        </div>\n        <h3>Name value:</h3>\n        <pre>{{valueOf(cgName)}}</pre>\n         <br/>\n        {{cgName.control}}\n        <p>Name is {{cgName?.control?.valid ? \"valid\" : \"invalid\"}}</p>\n        <h3>What's your favorite food?</h3>\n        <p><input ngControl=\"food\"></p>\n        <h3>Form value</h3>\n        <pre>{{valueOf(f)}}</pre>\n       <button type=\"submit\">save</button>\n      </form>\n    </div>\n    ",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgFormStuffComponent);
                return NgFormStuffComponent;
            }());
            exports_1("NgFormStuffComponent", NgFormStuffComponent);
        }
    }
});
//# sourceMappingURL=ngFormStuff.js.map