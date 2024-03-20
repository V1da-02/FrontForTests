import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { storyBox } from 'src/assets/storybox';

@Component({
  selector: 'app-home',
  template: `
    <div class="interface">
      <p id="storyText" #storyText class="storyText">Defaul text. If u see this, something went wrong :)</p>
      
    </div>
    <p class="options" (click)="buttonGetStory(0)">default option1</p>
    <p class="options" (click)="buttonGetStory(1)">default option2</p>
    <p class="options" (click)="buttonGetStory(2)">default option3</p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( public http:HttpClient,
               private localData:LocalDataService ){}

ngOnInit(){
  this.currentRoom = this.localData.loggedUser.roomId
  this.getStory(this.currentRoom)
  this.textChange(this.storyBox) 
}

public currentRoom:any;

// private storyBox = {
// text:"",
// choice:[],
// choiceGoToAdress:[]
// }

private storyBox:any;


buttonGetStory(index:number){
let goTo = this.storyBox.choiceGoToAdress[index]
this.getStory(goTo)



}



getStory(roomId:number){
  console.log(`trying to get room ${roomId} info`);
  
  this.http.post<storyBox>('http://localhost:8080/date', roomId).subscribe((response) =>{
    this.storyBox = response
    console.log(this.storyBox);
    
  },(error)=>{
    console.error("Error:"+error);
    
  });

  this.textChange(this.storyBox)
  
}


text = 'merge '

  // test() {
  //   if (this.storyTextRef) {
  //     this.storyTextRef.nativeElement.innerText = this.text;
  //   }
  // }

  g = document.getElementById("storyText");

  textChange(storyBox:storyBox) {
    let g = document.getElementById("storyText");

    if (g !== null) {
      g.innerText = this.storyBox.text;
      console.log('done');
      
    } else {
      console.error("Element with id 'storyText' not found.");
    }
  }

}
