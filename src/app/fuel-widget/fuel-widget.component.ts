import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-widget',
  templateUrl: './fuel-widget.component.html',
  styleUrls: ['./fuel-widget.component.css']
})
export class FuelWidgetComponent implements OnInit {
	fuelEfficiency:number = 30;

  constructor() { }

  ngOnInit() {
  	 let refreshMockTonnageData = setInterval(() => {
       this.fuelEfficiency = Math.floor(Math.random() * 100) + 1 ;        
     }, 5000);
     //until here
    }

}
