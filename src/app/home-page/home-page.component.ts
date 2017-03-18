import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent{
    teamThroughputGoal:number = 5000;
    currentTeamThroughput:number = 3520;
    percentage:number = this.currentTeamThroughput * 100 / this.teamThroughputGoal;
    operatorName:string = 'Nick';
}
