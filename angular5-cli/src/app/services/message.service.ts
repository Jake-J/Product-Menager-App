import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = localStorage.getItem("messages") ?JSON.parse(localStorage.getItem("messages")) : [];
//localStorage.getItem("messages") === null ? [] : 
  add(message: string) {
    this.messages.push(message);
    localStorage.setItem('messages',JSON.stringify(this.messages));
  }

  clear() {
    this.messages = [];
    localStorage.setItem('messages','');
  }
}