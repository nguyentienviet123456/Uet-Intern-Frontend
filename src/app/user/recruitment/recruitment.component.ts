import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  companyName: string;
  companyAddress: string;
  companyEmail: string;
  companyPhone: string;
  showNavigate = false;
  constructor() { }

  ngOnInit() {

  }

  RegisterCompany(){
    console.log(this.companyAddress);
  }
}
