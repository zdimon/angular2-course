import { Card } from './Card';

const NAMES_36 = [
                    {name: '6', rate: 5}, 
                    {name: '7', rate: 6},
                    {name: '8', rate: 7}, 
                    {name: '9', rate: 8},
                    {name: '10', rate: 9}, 
                    {name: 'J', rate: 10},
                    {name: 'Q', rate: 11}, 
                    {name: 'K', rate: 12},
                    {name: 'A', rate: 13}
                 ];

const NAMES_52 = [
                    {name: '2', rate: 1}, 
                    {name: '3', rate: 2},
                    {name: '4', rate: 3}, 
                    {name: '5', rate: 4},
                    {name: '6', rate: 5}, 
                    {name: '7', rate: 6},
                    {name: '8', rate: 7}, 
                    {name: '9', rate: 8},
                    {name: '10', rate: 9}, 
                    {name: 'J', rate: 10},
                    {name: 'Q', rate: 11}, 
                    {name: 'K', rate: 12},
                    {name: 'A', rate: 13}
                 ];

const FACES = [ 'S','D','H', 'C'];



export class Deck {
    cards: Array<Card>;
    names: any;


    constructor(ammount: number){

        this.cards = [];
        if(ammount==52){
            this.names = NAMES_52;
        }else{
            this.names = NAMES_36;
        }
        this.make(ammount);
    }

    make(ammount: number){

           FACES.forEach( f => {
                this.names.forEach(item => {
                    this.cards.push(new Card(item.name, f, item.rate));
                });
            }
        )
       
    }
    shuffle(){
        var copy = [], n = this.cards.length, i;
        while (n) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * this.cards.length);
            // If not already shuffled, move it to the new array.
            if (i in this.cards) {
                copy.push(this.cards[i]);
                delete this.cards[i];
                n--;
            }
        }
        this.cards = copy;
    }

    get(num: number): Array<Card>{
        let cards = [];
        if(this.cards.length == 0) return cards;
        for(let i=0; i<num; i++){
            cards.push(this.cards[0]);
            this.cards.splice(0,1);
        }
        return cards;
    }
    put(card: Card): void{
        this.cards.push(card);
    }
 
}