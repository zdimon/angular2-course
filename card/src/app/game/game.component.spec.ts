import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { Card } from './Card';
import { Deck } from './Deck'


describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Test Card class', () => {
    let name = 'test card';
    let face = 'H';
    let c = new Card(name,face, 1);
    expect(c.name).toEqual(name);
    expect(c.face).toEqual(face);
    console.log(c.image);
  });


  it('Test Deck class', () => {
   
    let d = new Deck(36);
    expect(d.cards.length).toEqual(36);
    let d2 = new Deck(52);
    expect(d2.cards.length).toEqual(52);

  });


  it('Test Deck shuffling', () => {
   
    let d = new Deck(36);
    let first = d.cards[0];
    d.shuffle();
    let next = d.cards[0];
    expect(first).not.toEqual(next);

  });

  it('Test geting and puting cards', () => { 
   
    let d = new Deck(36);

    let cardset = d.get(6);
    expect(cardset.length).toEqual(6);
    expect(d.cards.length).toEqual(30);

    d.put(cardset[0]);
    expect(d.cards.length).toEqual(31);
    

  });


});
