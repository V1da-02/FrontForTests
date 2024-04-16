import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-temp-link',
  template:`
  
  <div class="header">
  <h2></h2>
  </div>



  <div class="chList">
  <span>  
  <h3 class="chName">Character name</h3>
    <h3 class="chClass">Class</h3>
    <h3 class="chClass">Room</h3>
    </span>

  
  
  `,
  styleUrls: ['./temp-link.component.css']
})
export class TempLinkComponent {
  constructor(private router:Router){}
  ngOnInit(){
    console.log('you have visited the waiting room');
    
this.router.navigate(['/menu'])
  }

}
