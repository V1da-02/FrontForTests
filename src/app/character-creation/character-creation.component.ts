import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-creation',
  template: `
  <div class="form">
  <form>

  <div class="nameBox">
    <br>
    <label for="chName">Character name: </label>
    <br>
    <input name="chName" type="text" placeholder="" id="chName" style="width:100%">
  </div>

    <br>


    <div style="display:flex; align-items: center;">


    <div class="class-card">
    <label for="fighter"><p>Fighter</p></label>
    <label for="fighter"><img  height="340" src="../assets/fighter.png"></label>
    <input type="radio" id="fighter" name="class" value="fighter">
    </div>


    <div class="class-card">
    <label for="paladin"><p>Paladin</p></label>
    <label for="paladin"><img  height="340" src="../assets/paladin1.png"></label>
    <input type="radio" id="paladin" name="class" value="paladin">
    </div>

  

    
    <div class="class-card">
    <label for="wizard"><p>Wizard</p></label>
    <label for="wizard"><img  height="340" src="../assets/wizard1.png"></label>
    <input type="radio" id="wizard" name="class" value="wizard">
    </div>

    <br>

    </div>
    <br>
    <br>
    <br>
    <div style="display: flex; justify-content: center; align-items: center;">
    <input type="submit" value="Create character" class="createChBtn">
    </div>
  </form>



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
}
