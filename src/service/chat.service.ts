import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io(environment.apiURL);

  public sendMessage(message) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    (this.socket as any).on('message', (message: string) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}
