System.register(['angular2/core', 'angular2/common'], function(exports_1) {
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
    var Student, PasswordValidator, FormBuilderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Student = (function () {
                function Student() {
                }
                return Student;
            })();
            PasswordValidator = (function () {
                function PasswordValidator() {
                }
                PasswordValidator.startsWithNumber = function (control) {
                    if (control.value && control.value.length > 0) {
                        if (isNaN(control.value[0]))
                            return { 'startsWithNumber': true };
                    }
                    return null;
                };
                return PasswordValidator;
            })();
            FormBuilderComponent = (function () {
                function FormBuilderComponent(fb) {
                    var _this = this;
                    this._hasChanges = false;
                    this.student = new Student();
                    this.studentForm = fb.group({
                        'name': new common_1.Control(this.student.name, common_1.Validators.required),
                        'password': new common_1.Control(this.student.password, common_1.Validators.compose([common_1.Validators.required, PasswordValidator.startsWithNumber])),
                    });
                    this.studentForm.valueChanges.subscribe(function (changes) {
                        _this._hasChanges = true;
                    });
                }
                FormBuilderComponent.prototype.routerCanDeactivate = function (next, prev) {
                    if (this._hasChanges)
                        return confirm('Are you sure you want to leave?');
                    else
                        return true;
                };
                FormBuilderComponent.prototype.addNewGroup = function (student) {
                    if (this.studentForm.valid) {
                        alert('added ' + student.name);
                        this.student = new Student();
                    }
                    else {
                        alert('form is not valid!');
                    }
                };
                FormBuilderComponent = __decorate([
                    core_1.Component({
                        selector: 'form-builder',
                        templateUrl: '../app/forms/formbuilder.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormBuilderComponent);
                return FormBuilderComponent;
            })();
            exports_1("FormBuilderComponent", FormBuilderComponent);
        }
    }
});
//# sourceMappingURL=formbuilder.js.map