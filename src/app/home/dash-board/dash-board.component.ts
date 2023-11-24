import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

interface resume{
  name:string;
  age:number;
  address:string;
  pincode:string;
}

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {

  resume !: resume;

  ngOnInit():void{

    localStorage.setItem("data",JSON.stringify({
      name: "DINESH",
      age: 20,
      address: "chennai",
      pincode: "600071"
    }));

    $('button').click(()=> this.resume = JSON.parse(localStorage.getItem("data") as string));
  }
}
