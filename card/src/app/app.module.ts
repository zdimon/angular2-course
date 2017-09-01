import { GameComponent } from './game/game.component';
import { CardComponent } from './game/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RemoveQuotes } from './game/game.pipes';
import { CardService } from './game/service';

import { JQ_TOKEN, JQUERY_PROVIDER } from './jquery.service';
import { ToastrService } from './toatr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardComponent,
    RemoveQuotes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    CardService,
    ToastrService,
    JQUERY_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
