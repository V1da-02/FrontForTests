import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="interface">
      <p #storyText class="storyText">textbox</p>
      
    </div>
    <p class="options">option1</p>
    <p class="options">option2</p>
    <p class="options">option3</p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('storyText', { static: true }) storyTextRef!: ElementRef;

text = 'merge bine'

  test() {
    if (this.storyTextRef) {
      this.storyTextRef.nativeElement.innerText = this.text;
    }
  }
}
