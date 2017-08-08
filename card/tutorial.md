# Инсталяция.

    ng new card
    
## Настраиваем рабочую среду.

    npm install concurrently lite-server --save
    


    
- делаем задачу (Task->Configure Task)

    {
        // See https://go.microsoft.com/fwlink/?LinkId=733558
        // for the documentation about the tasks.json format
        "version": "2.0.0",
        "tasks": [
            {
                "taskName": "build",
                "command": "ng serve",
                "type": "shell"
            }
        ]
    }
            
    
- запускаем сервер 

  ng serve
    
- создадим компонент

    ng generate component game

# Тест для класса карты.  

  it('Test Card class', () => {
    let name = 'test card';
    let face = 'spade';
    let c = new Card(name,face, 1);
    expect(c.name).toEqual(name);
    expect(c.face).toEqual(face);
    console.log(c.image);
  });
    
    
# Класс карты.

    export class Card{
        name: string;
        face: string;
        rate: number;
        image: string;
        constructor(name: string, face: string, rate: number){
            this.name = name;
            this.face = face;
            this.rate = rate;
            this.image = this.rate+'_'+this.face+'.png'
        }
        public show(){
            return this.image;    
        }
    }

## Тест для калоды.

  it('Test Deck class', () => {
   
    let d = new Deck(36);
    expect(d.cards.length).toEqual(36);
    let d2 = new Deck(52);
    expect(d2.cards.length).toEqual(52);

  });
  

# Класс калоды.

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

    const FACES = ['Hearts','Diamonds','Spades','Clubs'];

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

        }
        get(){

        }
        put(){

        }

    }

## Тест для тасования.

  it('Test Deck shuffling', () => {
   
    let d = new Deck(36);
    let first = d.cards[0];
    d.shuffle();
    let next = d.cards[0];
    expect(first).not.toEqual(next);

  });
  

### Функция тасовки.

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
    
## тест для извлечения и добавления карт в колоду.


      it('Test geting and puting cards', () => { 
       
        let d = new Deck(36);

        let cardset = d.get(6);
        expect(cardset.length).toEqual(6);
        expect(d.cards.length).toEqual(30);

        d.put(cardset[0]);
        expect(d.cards.length).toEqual(31);
        

      });
      
## Методы

    get(num: number): Array<Card>{
        let cards = [];
        for(let i=0; i<num; i++){
            cards.push(this.cards[i]);
            this.cards.splice(i,1);
        }
        return cards;
    }
    
    put(card: Card): void{
        this.cards.push(card);
    }
    
    
## Отобразим карты.

https://github.com/selfthinker/CSS-Playing-Cards

Подцепим стилевик    
    


  
      
      
      
    
