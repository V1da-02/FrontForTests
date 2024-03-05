import { Component } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { HttpClient } from '@angular/common/http';
import { logger } from 'src/assets/logerType';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersType } from 'src/assets/usersType';

@Component({
  selector: 'app-login',
  template: `

  <div class="logger">  
  <input #login placeholder="login" type="text" class="inputs" autocomplete="off" (keydown.enter)="logIn(login.value, password.value)">
    <br>
    <input #password placeholder="password" type="password" class="inputs" (keydown.enter)="logIn(login.value, password.value)">    
    <br>
    <button class="btn" (click)="logIn(login.value, password.value)">login</button>

  <button (click)="goHome()">home</button>  <!-- TESTARE NAVIGATE-->
    
  </div>


  <div class="textDiv">
    <h1 class="title">Crossroads</h1>
    <br>
    <p class="text">{{text}}</p>
  </div>
  
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private http:HttpClient,
  private localData:LocalDataService,
  private router:Router) { }

  text = 
  "This game serves as an alternative for many Dungeons & Dragons enthusiasts who don't have the opportunity to find a Dungeon Master. The provided program allows each user to immerse themselves in a fantasy world full of magic, adventures, and mysteries. It is based on roleplay, where the player's choices significantly influence the storyline, and dice rolling, representing the chance of success or failure in various situations. This project encompasses a wide range of scenarios and multiple possible choices.";  
  
  loginResp:any;

  logIn(login:string, password:string){
    this.http.post<UsersType>('http://localhost:8080/logIn', {login, password}).subscribe((resp) => {
      this.loginResp = resp;
    });

    this.localData.loggedUser.username = this.loginResp.username;
    this.localData.loggedUser.roomId = this.loginResp.roomId;
    console.log(this.localData.loggedUser);    
  }



goHome(){
  this.router.navigate(['/home'])
}


link= 'http://localhost:8080/date'
received:any;
  temp(){
this.http.get(this.link).subscribe((data)=>{
  this.received = data
  console.log(this.received);
},(error)=>{
  console.error('Error:', error);
})
 
    
  }



}
