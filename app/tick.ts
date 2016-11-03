import { Component, Input } from '@angular/core';

@Component({
	selector: 'tick',
	template: `
		<div [style.width]="width" [style.height]="width" [style.left]="pos.left - width / 2" [style.top]="pos.top - width / 2" class="tick">
		</div>
	`
})

export class Tick {
	@Input() pos: Object;
  width: number = 12;

	constructor() {
	}
}
