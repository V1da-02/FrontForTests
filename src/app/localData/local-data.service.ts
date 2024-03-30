import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { UsersType} from 'src/assets/usersType';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(private http:HttpClient) {}

usersLink = './front/src/assets/users.json';


loggedUser = {
  username:null,
  roomId:null
}




}