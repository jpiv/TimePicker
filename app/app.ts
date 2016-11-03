import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Clock } from './clock';
import { Tick } from './tick';
import { Hand } from './hand';


@NgModule({
	imports: [ BrowserModule ],
	declarations: [ Clock, Tick, Hand ],
	bootstrap: [ Clock ]
})

export class App {}
