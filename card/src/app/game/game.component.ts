import { Component, OnInit } from '@angular/core';
import { Deck } from './Deck'
import { Card } from './Card'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  current_deck: Deck;
  current_set: Array<Card>;
  constructor() { 
     this.current_deck = new Deck(36);
     this.current_set = [];
  }

  ngOnInit() {
  }

  getCards(num: number){
    this.current_set = this.current_deck.get(6);
  }

}
