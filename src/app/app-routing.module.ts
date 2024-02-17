import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FalseLinkComponent } from './false-link/false-link.component';

const routes: Routes = [
{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'**', component:FalseLinkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
