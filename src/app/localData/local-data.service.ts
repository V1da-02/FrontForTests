import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { UsersType} from 'src/assets/usersType';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(private http:HttpClient) {}

usersLink = './front/src/assets/users.json';


link= 'http://locolhost:8080/date'
allUsers:any;

loggedUser = {
  login:"",
  password:"",
  username:"",
  characters:[]
}


logIn(){
this.http.get(this.link).subscribe((data)=>{
  this.allUsers = data
})
console.log(this.allUsers);


}


getUsers(){
  this.http.get(this.usersLink).subscribe( (data)=> {
    this.allUsers = data;
    console.log("Data received:" + this.allUsers);
    
  }, (error)=>{
      console.error('Error:',error);
      
    })

}

}
