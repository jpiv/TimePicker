import { Component } from '@angular/core';

@Component({
	selector: 'clock',
	template: `
		<div [style.height]="height + 'px'" [style.width]="width + 'px'" class="clockFace">
      <hand [angle]="handAngle" [pos]="{x: width / 2}" [length]="height"></hand>
			<tick (click)="tickClick(i)" [pos]="getPos(i)" *ngFor="let tick of ticks; let i = index;"></tick>	
		</div>
	`
})

export class Clock {
  width: number = 251;
  height: number = 251;
	tickNum: number = 12;
	ticks: number[];
  handAngle: number = 0;
	
	constructor() {
		this.ticks = Array(this.tickNum).fill(this.tickNum).map((num, i) => i);
	}

  tickClick(i) {
    console.log('tick clicked:', i);
    this.handAngle = 360 * (i / this.tickNum);
  }

	getPos(i) {
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
