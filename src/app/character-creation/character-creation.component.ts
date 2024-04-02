import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-creation',
  template: `
  <div class="form">
  <form>
    <label for="chName">Warrior name:</label>
    <input name="chName" type="text">
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
