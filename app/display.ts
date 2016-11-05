import { Component, Input, OnChanges } from '@angular/core';
import { selectModes } from './settings';

@Component({
	selector: 'display',
	template: `
    <div class="display">
      <span (click)="switchMode('hours')" class="hours">{{hours}}</span>:
      <span (click)="switchMode('mins')" class="minutes">{{mins}}</span>
    </div>
  `
})
export class Display implements OnChanges {
  @Input() time: Object;
  @Input() mode: string;
  @Input() onModeChange: Function;

  hours: string;
  mins: string;

  ngOnChanges() {
    this.hours = this.time[selectModes.HOURS].length < 2 ? '0' + this.time[selectModes.HOURS] : this.time[selectModes.HOURS];  
    this.mins = this.time[selectModes.MINS].length < 2 ? '0' + this.time[selectModes.MINS] : this.time[selectModes.MINS];  
  }

  switchMode(displaySegment) {
    if(displaySegment === 'hours') {
      this.onModeChange(selectModes.HOURS);
    } else if(displaySegment === 'mins') {
      this.onModeChange(selectModes.MINS);
    }
  }
}

