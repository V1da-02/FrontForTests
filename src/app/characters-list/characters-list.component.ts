import { Component, inject } from '@angular/core';
import { LocalDataService } from '../localData/local-data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters-list',
  template: `
  <div class="header">
  <h2></h2>
  </div>
  
  
  `,
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent {

  ngOnInit(){
()=>{
 if(this.localData.loggedUser.username) 
this.name = this.localData.loggedUser.username
}

()=>{
  if(this.localData.loggedUser.roomId == 0){
    this.Router.navigate(['/forge'])
  }
}

}
private name = ''
  Router = inject(Router);
  localData = inject(LocalDataService);
  

}
