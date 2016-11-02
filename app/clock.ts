import { Component } from '@angular/core';

@Component({
	selector: 'clock',
	template: `
		<div class="clockFace">
			<tick [left]="getLeft(i)" *ngFor="let tick of ticks; let i = index;"></tick>	
		</div>
	`
})

export class Clock {
	tickNum: number = 12;
	ticks: number[];
	
	constructor() {
		this.ticks = Array(this.tickNum).fill(this.tickNum).map((num, i) => i);
	}

	getLeft(i) {
		return i * 10 + 'px';
	}
}
