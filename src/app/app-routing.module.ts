import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FalseLinkComponent } from './false-link/false-link.component';
import { HomeComponent } from './home/home.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharactersListComponent } from './characters-list/characters-list.component';


const routes: Routes = [
{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'home', component:HomeComponent},
{path:'menu', component:CharactersListComponent},
{path:'forge', component:CharacterCreationComponent},
{path:'**', component:FalseLinkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
