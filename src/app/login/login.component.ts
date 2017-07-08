import { Component } from '@angular/core';
import { StompService } from 'ng2-stomp-service';
import { CircleService } from '../service/circle.service';
import { ChatBoxComponent } from '../chatbox/chatbox.component';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username: string;
  url = 'http://172.23.239.155:8087/gs-guide-websocket';

  constructor(
    private stomp: StompService, 
    private circleservice: CircleService) {
    stomp.configure({
      host: this.url,
      debug: true,
      queue: {'init': false}
    });
  }

  login(username: string) {
    localStorage.setItem("username",username);
    this.connect();
  }

  connect() {
    this.stomp.startConnect().then(() => {

      this.stomp.done('init');
      console.log('connected');
      this.username = localStorage.getItem("username");

      this.stomp.subscribe('/topic/chat/'+(this.username),(data)=> {
        this.circleservice.setMessage(data);
      });
    });   
  }


}
