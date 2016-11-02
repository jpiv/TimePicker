import { Component, Input } from '@angular/core';

@Component({
	selector: 'tick',
	template: `
		<div [style.margin-left]="left" class="tick">
		</div>
	`
})

export class Tick implements onInit {
	@Input() left: string;

	constructor() {
	}

	ngOnInit() {
		console.log(this.left)
	}
}
