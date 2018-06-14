import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  name: string;
  email: string;
  skypeId: string;
  facebook: string;
  phoneNumber: string;
  skillLanguage: string;
  constructor() { }

  ngOnInit() {
  }

  updateStudent(){
    console.log("test");
    console.log(this.email);
  }
}
