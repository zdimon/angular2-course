import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Card } from './Card';


@Component({
    selector: 'card',
    template: ` <div class="card back" *ngIf="card.isHidden">*</div>
                <div *ngIf="!card.isHidden" class="card rank-{{card.getRank()}} {{card.faceName }}">
                <span class="rank">{{card.getRank()}}</span>
                <span class="suit" [innerHTML]="card.faceCSS"></span>
                </div>`
    
})
export class CardComponent implements OnInit {
    @Input() card: Card
    @Output() eventClick = new EventEmitter();

    constructor() { }

    ngOnInit() {  

    }

    @HostListener('click', ['$event.target']) flipOver(crd){
        this.card.isHidden = !this.card.isHidden;
        this.eventClick.emit(this.card);
    }
 
    
   

}