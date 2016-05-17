import { Component, OnInit } from '@angular/core';
import { FlexchatMessageComponent } from './flexchat-message'
import { InputBarComponent } from './input-bar';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// eggheader
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  moduleId: module.id,
  selector: 'flexchat-app',
  templateUrl: 'flexchat.component.html',
  styleUrls: ['flexchat.component.css'],
  directives: [
    FlexchatMessageComponent, 
    InputBarComponent
  ]
})
export class FlexchatAppComponent implements OnInit {
  
  messages: FirebaseListObservable<any[]>;
  // limitSubject = new AsyncSubject<number>();
  limitSubject = new BehaviorSubject<number>(2);
  // limitSubject = new Subject<number>();
  
  // clock = Observable.interval(1000);
  
  constructor(af: AngularFire) {
    this.messages = af.database.list('/messages', {
      query: {
        limitToLast: this.limitSubject
      }
    });
    // eggheader
    // this.clock.subscribe(console.log.bind(console));
  }
  
  ngOnInit() {
    console.log("ngOninit: ");
    this.limitSubject.next(3);
  }
  
  addMessage(text) {
    this.messages.push({ text: text });
  }
  
  changeLimit(limit) {
    this.limitSubject.next(parseInt(limit, 10));
  }
}
