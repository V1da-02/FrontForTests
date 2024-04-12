import { Component, inject } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { CharacterCreationComponent } from '../character-creation/character-creation.component';


@Component({
  selector: 'app-characters-list',
  template: `
  <div class="header">
  <h2></h2>
  </div>

  <button (click)="this.newCharacterWindow=!this.newCharacterWindow" style="margin-left: 138px; margin-top:20px">New character</button>


  <div class="chList">
  <span>  
  <h3 class="chName">Character name</h3>
    <h3 class="chClass">Class</h3>
    <h3 class="chClass">Room</h3>
    <h3 class="Action">Actions</h3>
    </span>



<div class="overlay" *ngIf="newCharacterWindow"  (click)="closeOverlay($event)">
<div >
<app-character-creation class="content"></app-character-creation>
</div>
  </div>


    <span *ngFor="let character from this.localData.loggedUser">
    <h3 class="chName">Character name</h3>
    <h3 class="chClass">Class</h3>
    <h3 class="chClass">Room</h3>
    <h3 class="Action">Action</h3>
    </span>
  </div>
  
  
  `,
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent {
  // constructor(readonly localData:LocalDataService){}

  ngOnInit(){
console.log(this.localData.loggedUser.characters);

//uncomment when ready
// ()=>{
//  if(this.localData.loggedUser.username) 
// this.name = this.localData.loggedUser.username
// }

}
public newCharacterWindow = false;


private name = ''
  Router = inject(Router);
  localData = inject(LocalDataService);
  



  closeOverlay(e:any){
    if(e.target.classList.contains('overlay')){
      this.newCharacterWindow = false;
    } 
  }

  closePopup(){
    this.newCharacterWindow = false;
  }


}
