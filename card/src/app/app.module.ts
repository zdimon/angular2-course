import { GameComponent } from './game/game.component';
import { CardComponent } from './game/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RemoveQuotes } from './game/game.pipes';



@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardComponent,
    RemoveQuotes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
