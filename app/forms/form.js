System.register(['angular2/core', 'angular2/router', './defaultForm', './formbuilder', './ngFormStuff', './ngFormModelStuff', './templateform', './parentChildForm'], function(exports_1, context_1) {
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
    var core_1, router_1, defaultForm_1, formbuilder_1, ngFormStuff_1, ngFormModelStuff_1, templateform_1, parentChildForm_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (defaultForm_1_1) {
                defaultForm_1 = defaultForm_1_1;
            },
            function (formbuilder_1_1) {
                formbuilder_1 = formbuilder_1_1;
            },
            function (ngFormStuff_1_1) {
                ngFormStuff_1 = ngFormStuff_1_1;
            },
            function (ngFormModelStuff_1_1) {
                ngFormModelStuff_1 = ngFormModelStuff_1_1;
            },
            function (templateform_1_1) {
                templateform_1 = templateform_1_1;
            },
            function (parentChildForm_1_1) {
                parentChildForm_1 = parentChildForm_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent(_router) {
                    this._router = _router;
                }
                FormComponent = __decorate([
                    core_1.Component({
                        selector: 'router',
                        templateUrl: '../app/forms/form.html',
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'DefaultForm', component: defaultForm_1.DefaultFormComponent, useAsDefault: true },
                        { path: '/formbuilder', name: 'FormBuilder', component: formbuilder_1.FormBuilderComponent },
                        { path: '/parentChildForm', name: 'ParentChildForm', component: parentChildForm_1.ParentFormComponent },
                        { path: '/ngStuff', name: 'NgFormStuffComponent', component: ngFormStuff_1.NgFormStuffComponent },
                        { path: '/ngFormModelStuff', name: 'NgFormModelStuffComponent', component: ngFormModelStuff_1.NgFormModelStuffComponent },
                        { path: '/templateForm', name: 'TemplateForm', component: templateform_1.TemplateFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=form.js.map