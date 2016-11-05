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
var settings_1 = require('./settings');
var Clock = (function () {
    function Clock() {
        var _this = this;
        this.width = 201;
        this.height = 201;
        this.tickNum = 12;
        this.handAngle = 0;
        this.selectMode = settings_1.selectModes.HOURS;
        this.time = (_a = {},
            _a[settings_1.selectModes.HOURS] = '0',
            _a[settings_1.selectModes.MINS] = '0',
            _a.tod = settings_1.AM,
            _a
        );
        this.ticks = Array(this.tickNum).fill(this.tickNum).map(function (num, i) { return ({ index: i, value: _this.getTickValue(i) }); });
        var _a;
    }
    Clock.prototype.getTickValue = function (i) {
        if (this.selectMode === settings_1.selectModes.HOURS) {
            var maxValue = 12;
            if (!i)
                return maxValue;
            return (maxValue / this.tickNum) * i;
        }
        else if (this.selectMode === settings_1.selectModes.MINS) {
            var maxValue = 60;
            return (maxValue / this.tickNum) * i;
        }
    };
    Clock.prototype.switchMode = function (mode) {
        var _this = this;
        this.selectMode = mode;
        this.ticks.forEach(function (tick, i) { return tick.value = _this.getTickValue(i); });
    };
    Clock.prototype.setTime = function (tick) {
        this.time[this.selectMode] = String(tick.value);
        console.log(this.time);
    };
    Clock.prototype.tickClick = function (tick, i) {
        this.ticks.forEach(function (tickItem) { return tickItem.selected = tickItem.index === i; });
        this.setTime(tick);
        this.handAngle = 360 * (i / this.tickNum);
    };
    Clock.prototype.getTickPos = function (tick, i) {
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
            template: "\n    <div class=\"TimePicker\">\n      <display [onModeChange]=\"switchMode.bind(this)\" [mode]=\"selectMode\" [time]=\"time\"></display>\n      <div [style.height]=\"height + 'px'\" [style.width]=\"width + 'px'\" class=\"clockFace\">\n        <hand [angle]=\"handAngle\" [pos]=\"{x: width / 2}\" [length]=\"height\"></hand>\n        <tick (click)=\"tickClick(tick, i)\" [pos]=\"getTickPos(tick, i)\" [tick]=\"tick\" *ngFor=\"let tick of ticks; let i = index;\"></tick>\t\n      </div>\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Clock);
    return Clock;
}());
exports.Clock = Clock;
//# sourceMappingURL=clock.js.map