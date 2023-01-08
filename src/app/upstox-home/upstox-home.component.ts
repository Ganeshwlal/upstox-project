import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upstox-home',
  templateUrl: './upstox-home.component.html',
  styleUrls: ['./upstox-home.component.css']
})
export class UpstoxHomeComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit():void{

  }

}
