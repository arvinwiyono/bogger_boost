import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  SocketService
} from 'app/services/socket.service';
import { 
  ISocketItem 
} from 'models/socket-item.model';
import {
  Observable
} from "rxjs/Observable";
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SocketService]
})


export class HomePageComponent implements OnInit, OnDestroy {
  teamThroughputGoal: number = 10000;
  currentTeamThroughput: number = 1000;
  percentage: number = this.currentTeamThroughput * 100 / this.teamThroughputGoal;
  operatorName: string = 'Nick Wong - 226016';
  currentCycleTimeMin: number = 0;
  currentCycleTimeSec: string = '00';
  personalTonnage: number = 500;
  extraCurrentTeamThroughput: number = 0;

  // connection;
  connection;

  //     constructor(private socketService: SocketService, private router: Router
  // ) {}

  constructor(private socketService: SocketService) {}

  ngOnInit() {
      this.connection = this.socketService.get().subscribe(
          (socketItem: ISocketItem) =>{
              this.currentTeamThroughput = Math.ceil(socketItem.item.teamTonnage);
              if (this.currentTeamThroughput > this.teamThroughputGoal) {
                this.extraCurrentTeamThroughput = this.currentTeamThroughput - this.teamThroughputGoal;
                this.currentTeamThroughput = this.teamThroughputGoal;
                // clearInterval(refreshMockData);
              }
              this.personalTonnage = Math.round(socketItem.item.totalTonage);
              // this.currentCycleTimeMin = socketItem.item.currentCycleTimeMin;
              // this.currentCycleTimeSec = ("0" + socketItem.item.currentCycleTimeSec).slice(-2);;
              this.percentage = this.currentTeamThroughput * 100 / this.teamThroughputGoal;
          },
          error => console.log(error)
      );
    // this.connection = this.socketService.get().subscribe(data => {
    // 	console.log(data);
    //   this.currentTeamThroughput = data.teamTonnage;
    // })

    //Comment this section if socketservice works
 let timer = setInterval(() => {
      let seconds = parseInt(this.currentCycleTimeSec) + 1;
      if(seconds > 60){
        this.currentCycleTimeMin = this.currentCycleTimeMin + 1;
        this.currentCycleTimeSec = "00";
      }
      else{
         this.currentCycleTimeSec = ("0" + seconds).slice(-2);;
      }
    }, 1000);
    // let refreshMockData = setInterval(() => {
    //   this.currentTeamThroughput = this.currentTeamThroughput + 100;
    //   if (this.currentTeamThroughput == 5000) {
    //     clearInterval(refreshMockData);
    //   }
    // }, 1000);
    //until here
  }
    ngOnDestroy() {
      this.connection.unsubscribe();
    }
}
