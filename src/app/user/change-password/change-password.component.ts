import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  oldPass: string;
  newPass: string;
  constructor() { }

  ngOnInit() {
  }
  ChangePass(){
    console.log(this.oldPass);
  }
}
