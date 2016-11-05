import { Component } from '@angular/core';
import { TickItem } from './tick';
import { selectModes, AM } from './settings';


@Component({
	selector: 'clock',
	template: `
    <div class="TimePicker">
      <display [onModeChange]="switchMode.bind(this)" [mode]="selectMode" [time]="time"></display>
      <div [style.height]="height + 'px'" [style.width]="width + 'px'" class="clockFace">
        <hand [angle]="handAngle" [pos]="{x: width / 2}" [length]="height"></hand>
        <tick (click)="tickClick(tick, i)" [pos]="getTickPos(tick, i)" [tick]="tick" *ngFor="let tick of ticks; let i = index;"></tick>	
      </div>
    </div>
	`
})
export class Clock {
  width: number = 201;
  height: number = 201;
	tickNum: number = 12;
  handAngle: number = 0;
	ticks: TickItem[];

  selectMode: string = selectModes.HOURS;
  time: Object = {
    [selectModes.HOURS]: '0',
    [selectModes.MINS]: '0',
    tod: AM
  };
	
	constructor() {
		this.ticks = Array(this.tickNum).fill(this.tickNum).map((num, i) => ({ index: i, value: this.getTickValue(i) }));
	}

  getTickValue(i) {
    if(this.selectMode === selectModes.HOURS) {
      const maxValue = 12;
      if(!i) return maxValue;
      return (maxValue / this.tickNum) * i;
    } else if(this.selectMode === selectModes.MINS) {
      const maxValue = 60;
      return (maxValue / this.tickNum) * i;
    }
  }

  switchMode(mode) {
    this.selectMode = mode;
    this.ticks.forEach((tick, i) => tick.value = this.getTickValue(i));
  }

  setTime(tick) {
    this.time[this.selectMode] = String(tick.value);
    console.log(this.time);
  }

  tickClick(tick, i) {
    this.ticks.forEach(tickItem => tickItem.selected = tickItem.index === i);
    this.setTime(tick);
    this.handAngle = 360 * (i / this.tickNum);
  }

	getTickPos(tick, i) {
    const radius = this.width / 2;
    const deg = ((360 * (i / this.tickNum)) - 90);
    const theta = deg * Math.PI / 180; // Convert to Radians
    const x = Math.cos(theta) * radius; 
    const y = Math.sin(theta) * radius;

    return {
      left: (this.width / 2) + x,
      top: (this.height / 2) + y
    };
	}
}
