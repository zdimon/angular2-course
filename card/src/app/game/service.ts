import {Injectable} from '@angular/core';
import { Card } from './Card'

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


@Injectable() 
export class CardService {
    logs: string[] = [];
    

    static countWin(type: string, bet: number){
        switch(type){
            case 'pair':{
                return bet;
            }
            case 'three':{
                return bet*3;
            }
            case 'four':{
                return bet*6;
            }
            default:{
                break;                
            }

        }
    }

    static sumall(arr: any[]){
        let sum: number = 0
        arr.forEach(v => {
            sum += v
        });
        //console.log(arr);
        return sum;
    }

    static evaluate(hand: Array<Card>, bet: number) {
        //console.log(hand);

        let win: any = [];
        let doubles: any = {};
        NAMES_52.forEach(n=>{
            doubles[n.name] = 0;
            hand.forEach(h=>{
                if (h.name===n.name) { doubles[n.name] += 1 }
            });
        });
        for(let k in doubles){
            if(doubles[k]>1){
                switch (doubles[k]){
                    case 4: {                     
                        win.push(CardService.countWin('four',bet))
                        break;
                    }
                    case 3: {
                        win.push(CardService.countWin('three',bet))
                        break;
                    }
                    case 2: {
                        win.push(CardService.countWin('pair',bet))
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
        console.log(doubles);
        //console.log(win);
        //console.log(CardService.sumall(win));
        return CardService.sumall(win);
    }
}
