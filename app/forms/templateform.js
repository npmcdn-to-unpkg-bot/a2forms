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
    var Hero, TemplateFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Hero = (function () {
                function Hero(id, name, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
            TemplateFormComponent = (function () {
                function TemplateFormComponent() {
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                    // Reset the form with a new hero AND restore 'pristine' class state
                    // by toggling 'active' flag which causes the form
                    // to be removed/re-added in a tick via NgIf
                    // TODO: Workaround until NgForm has a reset method (#6822)
                    this.active = true;
                }
                TemplateFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                TemplateFormComponent.prototype.newHero = function () {
                    var _this = this;
                    this.model = new Hero(42, '', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                TemplateFormComponent = __decorate([
                    core_1.Component({
                        selector: 'template-form',
                        templateUrl: '../app/forms/templateform.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        styles: ["\n     .ng-valid[required] {\n            border-left: 5px solid #42A948; /* green */\n     }\n\n      .ng-invalid {\n            border-left: 5px solid #a94442; /* red */\n      }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateFormComponent);
                return TemplateFormComponent;
            }());
            exports_1("TemplateFormComponent", TemplateFormComponent);
        }
    }
});
//# sourceMappingURL=templateform.js.map