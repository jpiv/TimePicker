"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
;
var Tick = (function () {
    function Tick() {
        this.width = 28;
    }
    Tick.prototype.ngOnInit = function () {
        this.clickStyle = {
            width: this.width * 2,
            height: this.width * 2,
            left: this.pos.left - this.width,
            top: this.pos.top - this.width
        };
        this.tickStyle = {
            width: this.width,
            height: this.width,
            left: this.width / 2,
            top: this.width / 2,
            lineHeight: this.width + 'px'
        };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Tick.prototype, "pos", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Tick.prototype, "tick", void 0);
    Tick = __decorate([
        core_1.Component({
            selector: 'tick',
            template: "\n    <div [ngStyle]=\"clickStyle\" class=\"clickZone\">\n      <div [ngStyle]=\"tickStyle\" [style.background-color]=\"tick.selected ? 'red' : 'transparent'\" class=\"tick\">\n        <span class=\"tickText\">{{tick.value}}</span>\n      </div>\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Tick);
    return Tick;
}());
exports.Tick = Tick;
;
//# sourceMappingURL=tick.js.map