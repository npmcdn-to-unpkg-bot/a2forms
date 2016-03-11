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
    var NgFormModelStuffComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NgFormModelStuffComponent = (function () {
                function NgFormModelStuffComponent() {
                    this.loginForm = new common_1.ControlGroup({
                        login: new common_1.Control("aa", common_1.Validators.required),
                        password: new common_1.Control("bb", common_1.Validators.required)
                    });
                }
                Object.defineProperty(NgFormModelStuffComponent.prototype, "value", {
                    get: function () {
                        return JSON.stringify(this.loginForm.value, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                NgFormModelStuffComponent.prototype.onSubmit = function (val) {
                    console.log(val);
                };
                NgFormModelStuffComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>using NgFormModel</h2>\n    #login=\"ngForm\" - used for validation in html\n    <div>      \n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n       <form [ngFormModel]=\"loginForm\">\n        <p>Login: <input type=\"text\" ngControl=\"login\" #login=\"ngForm\"></p>\n        <p>Password: <input type=\"password\" ngControl=\"password\" #password=\"ngForm\"></p>\n      </form>\n      <p>Value:</p>\n      <pre>{{value}}</pre>\n      login is valid:{{login.valid}}\n      password is valid:{{password.valid}}\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!login.valid || !password.valid\">save</button>\n      </form>\n    </div>\n    ",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgFormModelStuffComponent);
                return NgFormModelStuffComponent;
            }());
            exports_1("NgFormModelStuffComponent", NgFormModelStuffComponent);
        }
    }
});
//# sourceMappingURL=ngFormModelStuff.js.map