import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { UsersType} from 'src/assets/usersType';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(private http:HttpClient) {}

usersLink = './front/src/assets/users.json';

playing = false;


loggedUser = {
  username:null,
  // characters:[{name:"Taoy", roomId:"1", class:"Paladin"}]
  characters:[]
}

selectedCharacter = {
  hp:null,
  name:null,
  roomId:null,
}





}