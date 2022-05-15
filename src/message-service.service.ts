import { Injectable } from '@angular/core';
import { environment } from './environments/environment';
import { io } from 'socket.io-client';
@Injectable()
export class MessageServiceService {
  socket;

  constructor() {}

  setupSocketConnection() {
    this.socket = io(environment.apiURL);
  }
}
