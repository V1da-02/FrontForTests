import { Component, inject } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { CharacterCreationComponent } from '../character-creation/character-creation.component';
import { HttpClient } from '@angular/common/http';
// import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { response } from 'express';
import { CharactersInterface } from 'src/assets/characters';


@Component({
  selector: 'app-characters-list',
  template: `
  <div class="header">

  <!-- <div class="error" *ngIf="showError">
<span>
  <h3>error message</h3>
</span>
  </div> -->

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
<!-- <app-character-creation class="content"></app-character-creation>  -->

<!-- new character creation  -->
<div class="content">
<div class="form">
  <div class="nameBox">
    <br>
    <label for="chName">Character name: </label>
    <br>
    <input name="chName" type="text" placeholder="" id="chName" style="width:100%; width: 700px;" #chName required>
  </div>

    <br>


    <div style="display:flex; align-items: center;">


    <div class="class-card">
    <label for="fighter"><p>Fighter</p></label>
    <label for="fighter"><img  height="340" src="../assets/fighter.png"></label>
    <input type="radio" id="fighter" name="class" value="Fighter" required (change)="updateSelectedClass($event)">
    </div>


    <div class="class-card">
    <label for="paladin"><p>Paladin</p></label>
    <label for="paladin"><img  height="340" src="../assets/paladin1.png"></label>
    <input type="radio" id="paladin" name="class" value="Paladin" required (change)="updateSelectedClass($event)">
    </div>

  

    
    <div class="class-card">
    <label for="wizard"><p>Wizard</p></label>
    <label for="wizard"><img  height="340" src="../assets/wizard1.png"></label>
    <input type="radio" id="wizard" name="class" value="Wizard" required (change)="updateSelectedClass($event)">
    </div>


    <div class="class-card">
    <h3 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; color: black;">{{selectedClass}}</h3>
    <p>Charisma:{{this.currentClassStats.Charisma}}</p>
    <p>Constitution:{{this.currentClassStats.Constitution}}</p>
    <p>Dexterity:{{this.currentClassStats.Dexterity}}</p>
    <p>Intellect:{{this.currentClassStats.Intellect}}</p>
    <p>Strength:{{this.currentClassStats.Strength}}</p>
    <p>Wisdom:{{this.currentClassStats.Wisdom}}</p>
  

    </div>


    <br>
    </div>
    <br>
    <br>
    <!-- <br> -->
    <div style="display: flex; justify-content: center; align-items: center;">
    <!-- <input type="submit" value="Create character" class="createChBtn"> -->
    <button class="createChBtn" style="width: auto;" (click)="createCharacter(chName.value, selectedClass)">Create character</button>
    </div>
  <!-- </form> -->



  </div>  
</div>
<!-- character creation end -->

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

async  ngOnInit(){
console.log(this.localData.loggedUser);
await this.getHeroes(this.localData.loggedUser.userId)

//uncomment when ready
// ()=>{
//  if(this.localData.loggedUser.username) 
// this.name = this.localData.loggedUser.username
// }

}
public newCharacterWindow = false;
public showError = true;


errorElement = document.getElementById("errorMsg")


private name = ''
  Router = inject(Router);
  localData = inject(LocalDataService);
  http = inject(HttpClient);
  

async getHeroes(userId:any){
  this.http.post<[CharactersInterface]>("http://localhost:8080/date/heroes", null, {params:{userId}}).subscribe((response)=>{})
}


  createCharacter(name:string, clasa:string){
    if(name== '' || clasa == ''){
    console.log("no data to pass");
  } else{
      this.http.post("http://localhost:8080/date/add", {name, clasa}).subscribe((response) =>{})
      this.newCharacterWindow=false
    }}
    
    public currentClassStats={
      Charisma:'0',
      Constitution:'0',
      Dexterity:'0',
      Intellect:'0',
      Strength:'0',
      Wisdom:'0'
    }
    
    
    
    selectedClass:string = '';
    
    updateSelectedClass(event: Event):void{
      this.selectedClass = (event.target as HTMLInputElement).value
      if (this.selectedClass=='Fighter'){
        this.currentClassStats.Charisma = "8 (-1)"
        this.currentClassStats.Constitution = "16 (+3)"
        this.currentClassStats.Dexterity = "10 (0)"
        this.currentClassStats.Intellect = "10 (0)"
        this.currentClassStats.Strength ="16 (+3)"
        this.currentClassStats.Wisdom = "14 (+2)"
      }
    
      else if (this.selectedClass=='Paladin'){
        this.currentClassStats.Charisma = "16 (+3)"
        this.currentClassStats.Constitution ="16 (+3)"
        this.currentClassStats.Dexterity = "8 (-1)"
        this.currentClassStats.Intellect = "8 (-1)"
        this.currentClassStats.Strength = "16 (+3)"
        this.currentClassStats.Wisdom = "10 (0)"
      }
    
      else if (this.selectedClass=='Wizard'){
        this.currentClassStats.Charisma = "10 (0)"
        this.currentClassStats.Constitution = "8 (-1)"
        this.currentClassStats.Dexterity = "16 (+3)"
        this.currentClassStats.Intellect = "16 (+3)"
        this.currentClassStats.Strength = "8 (-1)"
        this.currentClassStats.Wisdom = "16 (+3)"
      }
      else{
        this.currentClassStats.Charisma = '0'
        this.currentClassStats.Constitution = "0"
        this.currentClassStats.Dexterity = "0"
        this.currentClassStats.Intellect = "0"
        this.currentClassStats.Strength = "0"
        this.currentClassStats.Wisdom = "0"
      }
    }
    



  closeOverlay(e:any){
    if(e.target.classList.contains('overlay')){
      this.newCharacterWindow = false;
    } 
  }

  closePopup(){
    this.newCharacterWindow = false;
  }


}
