import { Component, Input, OnChanges } from '@angular/core';
import { Time } from './clock';
import { selectModes, AM, PM } from './settings';

@Component({
	selector: 'display',
	template: `
    <div [style.height]="height" class="display">
      <div [style.line-height]="height + 'px'" class="displayText">
        <span (click)="switchMode('hours')" [ngClass]="{'hours':true, selected: isModeHours()}">{{hours}}</span><!--
        -->:<!--
        --><span (click)="switchMode('mins')" [ngClass]="{'mins':true, selected: isModeMins()}">{{mins}}</span>
      </div>
      <div class="timeOfDay">
        <div (click)="switchTimeOfDay('am')" [ngClass]="{am: true, selected: isAM()}">AM</div>
        <div (click)="switchTimeOfDay('pm')" [ngClass]="{pm: true, selected: isPM()}">PM</div>
      </div>
    </div>
  `
})
export class Display implements OnChanges {
  @Input() time: Time;
  @Input() mode: string;
  @Input() onModeChange: Function;
  @Input() onTodChange: Function;

  height: number = 40;

  hours: string;
  mins: string;

  ngOnChanges() {
    this.hours = this.time[selectModes.HOURS].length < 2 ? '0' + this.time[selectModes.HOURS] : this.time[selectModes.HOURS];  
    this.mins = this.time[selectModes.MINS].length < 2 ? '0' + this.time[selectModes.MINS] : this.time[selectModes.MINS];  
  }

  isModeHours() {
    return this.mode === selectModes.HOURS;
  }

  isModeMins() {
    return this.mode === selectModes.MINS;
  }

  isPM() {
    return this.time.tod === PM;
  }

  isAM() {
    return this.time.tod === AM;
  }

  switchMode(displaySegment) {
    if(displaySegment === 'hours') {
      this.onModeChange(selectModes.HOURS);
    } else if(displaySegment === 'mins') {
      this.onModeChange(selectModes.MINS);
    }
  }

  switchTimeOfDay(tod) {
    if(tod === 'am') {
      this.onTodChange(AM);
    } else if(tod === 'pm') {
      this.onTodChange(PM);
    }    
  }
}

