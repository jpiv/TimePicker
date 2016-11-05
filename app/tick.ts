import { Component, Input, OnInit } from '@angular/core';

interface Pos {
  left: number;
  top: number;
};

@Component({
	selector: 'tick',
	template: `
    <div [ngStyle]="clickStyle" class="clickZone">
      <div [ngStyle]="tickStyle" [style.background-color]="tick.selected ? 'red' : 'transparent'" class="tick">
        <span class="tickText">{{tick.value}}</span>
      </div>
    </div>
	`
})
export class Tick implements OnInit {
	@Input() pos: Pos;
  @Input() tick: TickItem;
  width: number = 28;

  clickStyle: Object;  
  tickStyle: Object; 

  ngOnInit() {
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
  }
}

export interface TickItem {
  selected?: boolean;
  index: number;
  value: number;
};
