import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multi-select-ctrl-key';
  msgTypes = [];
  selectedMsgTypes = [];

  constructor() {
    this.msgTypes = [
      { id: "Both", val: "Both" },
      { id: "AB900", val: "AB900" },
      { id: "AB910", val: "AB910" },
      { id: "AAB910", val: "AAB910" },
      { id: "AAN910", val: "AAN910" }
    ];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  onClickMsgType(event, msgTypeClicked) {
    let msgType = msgTypeClicked.id;
    if ((msgType != "AAB910" && msgType != "AAN910") || (this.selectedMsgTypes.indexOf("AAB910") == -1 && this.selectedMsgTypes.indexOf("AAN910") == -1)) {
      this.selectedMsgTypes = [];
      this.selectedMsgTypes.push(msgType);
    } else {
        if (event.ctrlKey && (msgType == "AAB910" || msgType == "AAN910")) {
          if (this.selectedMsgTypes.indexOf(msgType) == -1) {
            this.selectedMsgTypes.push(msgType);
          }
        } else {
          this.selectedMsgTypes = [];
          this.selectedMsgTypes.push(msgType);
        }
    }
  }

  isMessageTypeSelected(msg) {
    return this.selectedMsgTypes.indexOf(msg.id) != -1 ? true : false;
  }
}