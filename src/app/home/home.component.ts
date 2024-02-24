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

ngOnInit(){
  this.temp()
}

  // @ViewChild('storyText', { static: true }) storyTextRef!: ElementRef;

text = 'merge bine'

  // test() {
  //   if (this.storyTextRef) {
  //     this.storyTextRef.nativeElement.innerText = this.text;
  //   }
  // }

  g = document.getElementById("storyText");

  temp() {
    let g = document.getElementById("storyText");
  
    // Check if g is not null before accessing its properties
    if (g !== null) {
      g.innerText = this.text;
      console.log('done');
      
    } else {
      console.error("Element with id 'storyText' not found.");
      // Handle the case where the element is not found, e.g., show an error message.
    }
  }

}
