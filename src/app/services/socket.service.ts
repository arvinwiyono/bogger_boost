import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import * as io from "socket.io-client";

@Injectable()
export class SocketService {
  private host: string = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
  socket: SocketIOClient.Socket;

  constructor() { }

  get(): Observable<any> {
        this.socket = io.connect(this.host);
        this.socket.on("connect", () => this.connect());
        this.socket.on("disconnect", () => this.disconnect());
        this.socket.on("error", (error: string) => {
            console.log(`ERROR: "${error}" (${this.host})`);
        });

        return Observable.create((observer: any) => {
            this.socket.on("data", (data: any) => observer.next({ data: data }) );
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
