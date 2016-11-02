import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Clock } from './clock';
import { Tick } from './tick';


@NgModule({
	imports: [ BrowserModule ],
	declarations: [ Clock, Tick ],
	bootstrap: [ Clock ]
})

export class App {}
