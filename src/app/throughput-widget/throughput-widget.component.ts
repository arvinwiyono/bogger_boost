import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  SocketService
} from 'app/services/socket.service';
import { 
  ISocketItem 
} from 'models/socket-item.model';
import {
  Observable
} from "rxjs/Observable";

@Component({
  selector: 'app-throughput-widget',
  templateUrl: './throughput-widget.component.html',
  styleUrls: ['./throughput-widget.component.css'],
  providers: [SocketService]
})
export class ThroughputWidgetComponent implements OnInit, OnDestroy {
	currentThroughput:number = 378;
	bestThroughput:number = 450;

  connection;

  //     constructor(private socketService: SocketService, private router: Router
  // ) {}

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.connection = this.socketService.get().subscribe(
        (socketItem: ISocketItem) =>{
            this.currentThroughput = Math.ceil(socketItem.item.throughput);
            if(this.currentThroughput > this.bestThroughput) {
              this.bestThroughput = this.currentThroughput;
            }
        },
          error => console.log(error)
      );
  }

  ngOnDestroy() {
        this.connection.unsubscribe();
  }

}
