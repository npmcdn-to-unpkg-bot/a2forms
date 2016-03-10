System.register(['angular2/core', 'rxjs/Rx', 'angular2/common'], function(exports_1, context_1) {
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
    var TodoItem, CheckAllComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //The operators will be available. 
            //When you use Observable class .. prefix it with Rx. ( Rx.Observable ) 
            TodoItem = (function () {
                function TodoItem() {
                }
                return TodoItem;
            }());
            CheckAllComponent = (function () {
                function CheckAllComponent() {
                    var _this = this;
                    this.items = [];
                    this.allCtrl = new common_1.Control();
                    this.allCtrl.valueChanges.subscribe(function (val) {
                        _this.items.forEach(function (item) {
                            item.isChecked = val;
                        });
                    });
                }
                CheckAllComponent.prototype.ngOnInit = function () {
                    for (var i = 1; i < 10; i++) {
                        this.items.push({ description: 'item..' + i, isDone: (i % 2) == 0, isChecked: false });
                    }
                };
                CheckAllComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div><input type=\"checkbox\" [ngFormControl]=\"allCtrl\"/>checkall</div>\n    <ul>\n        <li *ngFor=\"#todo of items\" [class.isDone]=\"todo.isDone\">\n        <input type=\"checkbox\" [checked]=\"todo.isChecked\"/>{{todo.description}} - {{todo.isDone}}</li>\n    </ul>\n         ",
                        styles: ['.isDone {color: green;font-weight: bold;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CheckAllComponent);
                return CheckAllComponent;
            }());
            exports_1("CheckAllComponent", CheckAllComponent);
        }
    }
});
//# sourceMappingURL=checkall.js.map