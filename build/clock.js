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
        this.width = 251;
        this.height = 251;
        this.tickNum = 12;
        this.handAngle = 0;
        this.ticks = Array(this.tickNum).fill(this.tickNum).map(function (num, i) { return i; });
    }
    Clock.prototype.tickClick = function (i) {
        console.log('tick clicked:', i);
        this.handAngle = 360 * (i / this.tickNum);
    };
    Clock.prototype.getPos = function (i) {
        var radius = this.width / 2;
        var deg = ((360 * (i / this.tickNum)) - 90);
        var theta = deg * Math.PI / 180; // Convert to Radians
        var x = Math.cos(theta) * radius;
        var y = Math.sin(theta) * radius;
        return {
            left: (this.width / 2) + x,
            top: (this.height / 2) + y
        };
    };
    Clock = __decorate([
        core_1.Component({
            selector: 'clock',
            template: "\n\t\t<div [style.height]=\"height + 'px'\" [style.width]=\"width + 'px'\" class=\"clockFace\">\n      <hand [angle]=\"handAngle\" [pos]=\"{x: width / 2}\" [length]=\"height\"></hand>\n\t\t\t<tick (click)=\"tickClick(i)\" [pos]=\"getPos(i)\" *ngFor=\"let tick of ticks; let i = index;\"></tick>\t\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Clock);
    return Clock;
}());
exports.Clock = Clock;
//# sourceMappingURL=clock.js.map