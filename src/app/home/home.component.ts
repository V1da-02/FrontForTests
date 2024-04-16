import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { storyBox } from 'src/assets/storybox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <button (click)="clearCharacterData()">change character</button>

    <div class="interface">
      <p id="storyText" #storyText class="storyText">Defaul text. If u see this, something went wrong :)</p>
      <!-- <button (click)="this.getStory(1)">log storybox</button> -->
    </div>
    <p id="btn1" class="options" (click)="buttonGetStory(0)">default option1</p>
    <p id="btn2" class="options" (click)="buttonGetStory(1)">default option2</p>
    <p id="btn3" class="options" (click)="buttonGetStory(2)">default option3</p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( public http:HttpClient,
               private localData:LocalDataService, 
               private router:Router){}

ngOnInit(){
  if(this.checkLogStatus()){
  this.currentRoom = this.localData.selectedCharacter.roomId
  this.getStory(this.currentRoom)
  this.textChange(this.storyBox) 
}
}

public currentRoom:any;
private storyBox:any;


clearCharacterData(){
  this.localData.selectedCharacter.class = null;
  this.localData.selectedCharacter.hp = null;
  this.localData.selectedCharacter.id = null;
  this.localData.selectedCharacter.name = null;
  this.localData.selectedCharacter.roomId = null;
  this.router.navigate(['/menu'])
}


buttonGetStory(index:number){
let goTo = this.storyBox.goTo[index]
this.getStory(goTo)

}

async getStory(roomId:number){
  console.log(`trying to get room ${roomId} info`);
  
 const box = await this.http.post<storyBox>('http://localhost:8080/date', null, {params:{roomId}}).subscribe((response) =>{
    this.storyBox = response
    // console.log(response);
    console.log(this.storyBox);
    
    this.textChange(this.storyBox)
  },(error)=>{
    console.error("Error:"+error);
    
  });
}


  textChange(storyBox:storyBox) {
    let g = document.getElementById("storyText");
    let b1 = document.getElementById("btn1")
    let b2 = document.getElementById("btn2")
    let b3 = document.getElementById("btn3")

    if(b1 !== null){
      b1.innerText = this.storyBox.alegeri[0]
      console.log('btn1 initialized');
      }

    if(b2 !== null){
      b2.innerText = this.storyBox.alegeri[1]
      console.log('btn2 initialized');
    }  

    if(b3 !== null){
      b3.innerText = this.storyBox.alegeri[2]
      console.log('btn3 initialized');
      }


    if (g !== null) {
      g.innerText = this.storyBox.text;
      console.log('Box text initialized');
      
    } else {
      console.error("Element with id 'storyText' not found.");
    }
  }

checkLogStatus(){
  if(this.localData.selectedCharacter.roomId == null || this.localData.loggedUser.username == null || this.localData.selectedCharacter.id == null){
    this.router.navigate(['/login'])
  return false
  }
  else return true;
}


}
