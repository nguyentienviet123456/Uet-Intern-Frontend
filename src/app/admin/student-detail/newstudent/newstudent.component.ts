import { Component, OnInit } from '@angular/core';
import { NewStudent } from './newstudent';
@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {
  public model = new NewStudent() ;
  constructor() {
   }

  ngOnInit() {
  }
  CreateStudent(){
    console.log(this.model);
  }
}
