import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
  <div class="registerBox">
    <label for="login" style="color: white;">Login:</label>
    <br>
    <input type="text" id="login" placeholder="login" #login required autocomplete="off">
    <br>
    <label for="username" style="color: white;">Username:</label>
    <br>
    <input type="text" id="username" placeholder="username" #username autocomplete="off">
    <br>
    <label for="password" style="color: white;">Password:</label>
    <br>
    <input type="password" id="password" placeholder="password" #password autocomplete="off">
    <br>
    <button class="btn" (click)="register(login.value, username.value, password.value)">Register</button>
    <button class="btn" (click)="this.router.navigate(['/login'])">Cancel</button>
  </div>

  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient, public router:Router){ }


 async register(login:string, username:string, password:string){
  await  this.http.post('http://localhost:8080/register', {login, username, password}).subscribe((response)=>{
      console.log(response);
      const raspuns = response
   if(raspuns != 'Success'){
    console.log('error');
   } else{console.log('Success');
   }
    })
  

  }
}
