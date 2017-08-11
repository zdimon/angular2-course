import { Component, OnInit } from '@angular/core';
import { Deck } from './Deck'
import { Card } from './Card'
import { CardComponent } from './card.component';
import { CardService } from './service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  current_deck: Deck;
  current_set: Array<Card>;
  cards_selected: Array<Card>;
  bet: number;
  is_active_game: boolean;
  account: number;
  isBetUpPossible: boolean;
  isBetDownPossible: boolean;
  win: number;


  constructor() { 
     
     this.current_set = [];
     this.cards_selected = [];
     this.bet = 0;
     this.win = 0;
     this.is_active_game = false;
     this.account = 10;
     this.isBetUpPossible = true;
     this.isBetDownPossible = false;

  }

  ngOnInit() {
  }

  getCards(num: number){
    this.current_set = this.current_deck.get(6);
  }

  shuffle(){
    this.current_deck.shuffle();
  }

  selectCard(card: Card){
    if(this._is_exist(this.cards_selected,card)){
      this._delete(this.cards_selected,card)
    } else {
      this.cards_selected.push(card);
    }
    //console.log(this.cards_selected);
  }  

  _delete(ar,card){
     this.cards_selected.forEach(v=>{   
        if(v.name === card.name && v.face === card.face)
          {
            this.cards_selected.splice(this.cards_selected.indexOf(v),1);
          }
     });
  }  

  _is_exist(ar,card){
     let fl = false;
     this.cards_selected.forEach(v=>{   
        if(v.name === card.name && v.face === card.face)
          {
            fl = true;
          }
     });
    return fl;
  }

  changeCards(card: Card){
    this.cards_selected.forEach(v=>{   
      this.current_set.forEach(vv=>{   
        if(vv.name === v.name && vv.face === v.face)
          {
            let nc = this.current_deck.get(1);
            this.current_set[this.current_set.indexOf(vv)] = nc[0];
          }
      });        
    });
    this.cards_selected = [];
    this.win = CardService.evaluate(this.current_set, this.bet);
  }  


  start(): void{
    this.is_active_game = true;
    this.isBetDownPossible = false;
    this.isBetUpPossible = false;
    this.cards_selected = [];
    this.current_deck = new Deck(52);
    this.current_deck.shuffle();
    this.current_set = this.current_deck.get(5);
    this.win = CardService.evaluate(this.current_set, this.bet);
    this.account -= this.bet;
  } 


  isValidSelection(): boolean{
    if (this.cards_selected.length > 0) return true;
    return false; 
  }

  canTake(): boolean{
    if (this.win > 0) return true;
    return false; 
  }

  takeMoney(): void{
    this.account += this.win;
    this.win = 0;
  }

  isStartPossible(): boolean{
    if (this.bet > 0) return true;
    return false; 
  }

  betUp(): void{
    
    if (this.account>0) {
      this.isBetDownPossible = true;
      this.bet += 1;
      if (this.account==0) this.isBetUpPossible = false;
    } else {
      this.isBetUpPossible = false;
    }
  }


  betDown(): void{
    this.bet -= 1;
    if (this.bet > 0){
      this.isBetDownPossible = true;  
      this.isBetUpPossible = true;
    } else {
      this.isBetDownPossible = false; 
    }

      
    

  }



}
