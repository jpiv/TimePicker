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
var Clock = (function () {
    function Clock() {
        this.tickNum = 12;
        this.ticks = Array(this.tickNum).fill(this.tickNum).map(function (num, i) { return i; });
    }
    Clock.prototype.getLeft = function (i) {
        return i * 10 + 'px';
    };
    Clock = __decorate([
        core_1.Component({
            selector: 'clock',
            template: "\n\t\t<div class=\"clockFace\">\n\t\t\t<tick [left]=\"getLeft(i)\" *ngFor=\"let tick of ticks; let i = index;\"></tick>\t\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Clock);
    return Clock;
}());
exports.Clock = Clock;
//# sourceMappingURL=clock.js.map