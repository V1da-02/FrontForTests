import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { FalseLinkComponent } from './false-link/false-link.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { TempLinkComponent } from './temp-link/temp-link.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GameComponent,
    FalseLinkComponent,
    CharacterCreationComponent,
    CharactersListComponent,
    TempLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
