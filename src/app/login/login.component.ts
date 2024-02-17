import { Component } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';

@Component({
  selector: 'app-login',
  template: `

  <div class="logger">  
  <input #login placeholder="login" type="text" class="inputs" autocomplete="off" (keydown.enter)="logIn(login.value, password.value)">
    <br>
    <input #password placeholder="password" type="password" class="inputs" (keydown.enter)="logIn(login.value, password.value)">    
    <br>
    <button class="btn" (click)="logIn(login.value, password.value)">login</button>


    
  </div>


  <div class="textDiv">
    <h1 class="title">Infamous path</h1>
    <br>
    <p class="text">{{text}}</p>
  </div>
  
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // constructor(private Service:LocalDataService){}

  text = 
  "This game serves as an alternative for many Dungeons & Dragons enthusiasts who don't have the opportunity to find a Dungeon Master. The provided program allows each user to immerse themselves in a fantasy world full of magic, adventures, and mysteries. It is based on roleplay, where the player's choices significantly influence the storyline, and dice rolling, representing the chance of success or failure in various situations. This project encompasses a wide range of scenarios and multiple possible choices.";  
  
  
  logIn(login:string, password:string){
    console.log(login, password);
    // this.Service.getUsers()
    // console.log(this.Service.allUsers);
    
    
    
  }





}
