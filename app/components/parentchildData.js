System.register(['angular2/core', 'rxjs/Rx'], function(exports_1) {
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
    var ChildComponent, ParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            //The operators will be available. 
            //When you use Observable class .. prefix it with Rx. ( Rx.Observable ) 
            ChildComponent = (function () {
                function ChildComponent() {
                    this.childvarChange = new core_1.EventEmitter();
                }
                ChildComponent.prototype.onSubmit = function () {
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ChildComponent.prototype, "childvarChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChildComponent.prototype, "childvar", void 0);
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'input-test',
                        template: "<div class=\"well\">\n    <form (ngSubmit)=\"onSubmit()\" #testform=\"ngForm\">\n        {{name}}\n        <textarea #textarea [(ngModel)]=\"childvar\" (ngModelChange)=\"childvarChange.emit($event)\" ></textarea>        \n    </form>\n    </div>\n         "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            })();
            exports_1("ChildComponent", ChildComponent);
            ParentComponent = (function () {
                function ParentComponent() {
                    this.parentVar = null;
                }
                ParentComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div>\n        text entered in child component: {{parentVar}}\n        <hr/>\n        <input-test [(childvar)]=\"parentVar\"></input-test>\n    </div>\n         ",
                        directives: [ChildComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParentComponent);
                return ParentComponent;
            })();
            exports_1("ParentComponent", ParentComponent);
        }
    }
});
//# sourceMappingURL=parentchildData.js.map