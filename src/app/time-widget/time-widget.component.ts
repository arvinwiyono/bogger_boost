import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-widget',
  templateUrl: './time-widget.component.html',
  styleUrls: ['./time-widget.component.css']
})
export class TimeWidgetComponent implements OnInit {
	averageCycleTime:number = 3;
	distance:number = 210;
	currentCycleTimeMin:number = 2;
	currentCycleTimeSec:number = 10;

  constructor() { }

  ngOnInit() {
  }

}
