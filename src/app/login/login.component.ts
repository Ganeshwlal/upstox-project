import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit():void{

  }

  userDetails:any={
    1000:{mobile:1000,username:"Ganesh W Lal",password:1000,balance:7000},
    1001:{mobile:1001,username:"Karthik",password:1001,balance:7000},
    1002:{mobile:1002,username:"Vishnu",password:1002,balance:7000},
    1003:{mobile:1003,username:"Ajay",password:1003,balance:7000},
    1004:{mobile:1004,username:"Shyam",password:1004,balance:7000},
    1005:{mobile:1005,username:"Amal",password:1005,balance:7000}
  }

pswd:any;
number:any;
num:any;

num1:any;
pswd2:any;

login(){

  var num = this.number;
  var pswd1 = this.pswd;
  var users = this.userDetails;

  
  if(num in users){
    
    if(pswd1==users[num]['password']){
      alert('login success');
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incorrect password')
      
    }

  }
  else{
    alert('user not found')
  }
  
}


  

}
