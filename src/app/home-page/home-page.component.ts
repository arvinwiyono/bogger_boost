import { Component, OnInit, OnDestroy} from '@angular/core';
import { SocketService } from 'app/services/socket.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SocketService]
})

export class HomePageComponent implements OnInit, OnDestroy{
    teamThroughputGoal:number = 5000;
    currentTeamThroughput:number = 3520;
    percentage:number = this.currentTeamThroughput * 100 / this.teamThroughputGoal;
    operatorName:string = 'Nick Wong - 226016';
    connection;

    constructor(private socketService: SocketService) {}

    ngOnInit() {
      this.connection = this.socketService.get().subscribe(data => {
      	console.log(data);
        this.currentTeamThroughput = data.teamTonnage;
      })
    }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
