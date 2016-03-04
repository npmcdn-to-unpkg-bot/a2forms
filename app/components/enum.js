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
    var CountryCodeEnum, EnumComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            (function (CountryCodeEnum) {
                CountryCodeEnum[CountryCodeEnum["France"] = 1] = "France";
                CountryCodeEnum[CountryCodeEnum["Belgium"] = 2] = "Belgium";
            })(CountryCodeEnum || (CountryCodeEnum = {}));
            exports_1("CountryCodeEnum", CountryCodeEnum);
            EnumComponent = (function () {
                function EnumComponent() {
                    this.countries = CountryCodeEnum;
                    this.keys = Object.keys(this.countries).filter(function (item) { return !isNaN(parseFloat(item)) && isFinite(item); });
                }
                EnumComponent = __decorate([
                    core_1.Component({
                        selector: 'enum-comp',
                        template: "\n    <div>\n      <select>\n        <option *ngFor=\"#key of keys\" [value]=\"key\" [label]=\"countries[key]\"></option>\n      </select>\n    </div>\n  ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], EnumComponent);
                return EnumComponent;
            })();
            exports_1("EnumComponent", EnumComponent);
        }
    }
});
//# sourceMappingURL=enum.js.map