import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import * as io from "socket.io-client";

@Injectable()
export class SocketService {
  private host: string = window.location.protocol + "//" + window.location.hostname + ":" + 5000
  socket: SocketIOClient.Socket;

  constructor() { 
      this.socket = io.connect(this.host);
  }

  get(): Observable<any> {
        this.socket = io.connect(this.host);
        this.socket.on("connect", () => this.connect());
        this.socket.on("disconnect", () => this.disconnect());
        this.socket.on("error", (error: string) => {
            console.log(`ERROR: "${error}" (${this.host})`);
        });

        // Return observable which follows "create" and "remove" signals from socket stream
        return Observable.create((observer: any) => {
            this.socket.on("data", (data: any) => observer.next({ item: data }) );
            return () => this.socket.close();
        });
    }

    // Handle connection opening
    private connect() {
        console.log(`Connected to "${this.host}"`);
    }

    // Handle connection closing
    private disconnect() {
        console.log(`Disconnected from "${this.host}"`);
    }

}
