import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="interface">
      <p id="storyText" #storyText class="storyText">gf;kdjngdfkjgfbkjdgbdjdb</p>
      
    </div>
    <p class="options">option1</p>
    <p class="options">Decizi după acest noroc să termini cu toate infracțiunile și să trăiești o viață liniștită</p>
    <p class="options">{{text}}</p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( public http:HttpClient ){}

ngOnInit(){
  this.textChange()
}

public currentRoom:any;

private storyBox = {
text:"",
choice:[],
choiceGoToAdress:[]
}


getStory(roomId:number){
  this.http.post('http://localhost:8080/getStory', roomId)
}


text = 'merge '

  // test() {
  //   if (this.storyTextRef) {
  //     this.storyTextRef.nativeElement.innerText = this.text;
  //   }
  // }

  g = document.getElementById("storyText");

  textChange() {
    let g = document.getElementById("storyText");

    if (g !== null) {
      g.innerText = this.text;
      console.log('done');
      
    } else {
      console.error("Element with id 'storyText' not found.");
    }
  }

}
