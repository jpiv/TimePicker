import { Component, Input } from '@angular/core';

@Component({
	selector: 'hand',
	template: `
		<div [style.transform]="'rotate(' + angle + 'deg)'" 
      [style.left]="pos.x - (thickness / 2)" [style.height]="length" [style.width]="thickness" class="hand">
      <hr [style.height]="length / 2" />
      <div class="circle"></div>
		</div>
	`
})

export class Hand {
	@Input() angle: number;
  @Input() pos: Object;
  @Input() length: number;

  thickness: number = 2;

	constructor() {
	}
}
