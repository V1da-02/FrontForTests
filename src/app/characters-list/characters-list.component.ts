import { Component, inject } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-characters-list',
  template: `
  <div class="header">
  <h2></h2>
  </div>


  <div class="chList">
  <span>  
  <h3 class="chName">Character name</h3>
    <h3 class="chClass">Class</h3>
    <h3 class="chClass">Room</h3>
    <h3 class="Action">Action</h3>
    </span>

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

//uncomment when ready
// ()=>{
//  if(this.localData.loggedUser.username) 
// this.name = this.localData.loggedUser.username
// }

// ()=>{
//   if(this.localData.loggedUser.roomId == 0){
//     this.Router.navigate(['/forge'])
//   }
// }

}
private name = ''
  Router = inject(Router);
  localData = inject(LocalDataService);
  

}
