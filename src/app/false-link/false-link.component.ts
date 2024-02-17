import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-false-link',
  template: `
  <h1 class="text">Invalid link</h1>
  <h1 class="text" (click)="goToLoginPage()">Return to login page</h1>
  `,
  styleUrls: ['./false-link.component.css']
})
export class FalseLinkComponent {
constructor(private router:Router){ }

goToLoginPage(){
this.router.navigate(['login'])
}

}
