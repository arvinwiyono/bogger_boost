import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-throughput-widget',
  templateUrl: './throughput-widget.component.html',
  styleUrls: ['./throughput-widget.component.css']
})
export class ThroughputWidgetComponent implements OnInit {
	currentThroughput:number = 378;
	bestThroughput:number = 789;

  constructor() { }

  ngOnInit() {

  }

}
