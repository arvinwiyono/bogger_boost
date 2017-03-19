import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  SocketService
} from 'app/services/socket.service';
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
  styleUrls: ['./home-page.component.css']
    //providers: [SocketService]
})


export class HomePageComponent implements OnInit, OnDestroy {
  teamThroughputGoal: number = 5000;
  currentTeamThroughput: number = 1000;
  percentage: number = this.currentTeamThroughput * 100 / this.teamThroughputGoal;
  operatorName: string = 'Nick Wong - 226016';
  currentCycleTimeMin: number = 2;
  currentCycleTimeSec: number = 10;
  personalTonnage: number = 500;
  extraCurrentTeamThroughput: number = 0;

  // connection;

  //     constructor(private socketService: SocketService, private router: Router
  // ) {}

  ngOnInit() {
    // this.connection = this.socketService.get().subscribe(data => {
    // 	console.log(data);
    //   this.currentTeamThroughput = data.teamTonnage;
    // })

    //Comment this section if socketservice works
    let refreshMockData = setInterval(() => {
      this.currentTeamThroughput = this.currentTeamThroughput + 100;
      if (this.currentTeamThroughput > 5000) {
        this.currentTeamThroughput = 5000;
        if(this.extraCurrentTeamThroughput == 0){
          this.extraCurrentTeamThroughput = 100;
        }
        this.extraCurrentTeamThroughput = this.extraCurrentTeamThroughput + 1;
        // clearInterval(refreshMockData);
      }
    }, 1000);
    //until here
  }

  ngOnDestroy() {
    //this.connection.unsubscribe();
  }
}
