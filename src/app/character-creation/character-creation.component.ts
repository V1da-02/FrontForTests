import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-creation',
  template: `
  <!-- <form action="http://localhost:8080/createCharacter" method="post"> -->
<div class="form">
  <div class="nameBox">
    <br>
    <label for="chName">Character name: </label>
    <br>
    <input name="chName" type="text" placeholder="" id="chName" style="width:100%; width: 700px;" required>
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


    <div class="class-card"  style="width: ;">
    <h3 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">{{selectedClass}}</h3>
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
    <br>
    <div style="display: flex; justify-content: center; align-items: center;">
    <!-- <input type="submit" value="Create character" class="createChBtn"> -->
    <button class="createChBtn" style="width: auto;">Create character</button>
    </div>
  <!-- </form> -->



  </div>  
  `,
  styleUrls: ['./character-creation.component.css']
})


export class CharacterCreationComponent {

  ngOnInit(){
    // if(this.localData.loggedUser.roomId != 0){
    //   this.Router.navigate(['/home'])
    // }
  }

localData= inject(LocalDataService);
Router = inject(Router)


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

}
