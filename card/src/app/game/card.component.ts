import { Component, OnInit, Input, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { Card } from './Card';
import { JQ_TOKEN } from '../jquery.service';
import { ToastrService } from '../toatr.service';


@Component({
    selector: 'card',
    template: ` <div class="card_cell">
                    <div *ngIf="card" [ngClass]="{'isHighlighted': card.isHighlighted}">
                        
                        <div class="card back" *ngIf="card.isHidden">*</div>
                        <div *ngIf="!card.isHidden"  class="card rank-{{card.name}} {{card.faceName }}">
                            <span class="rank">{{card.name}}</span>
                            <span class="suit" [innerHTML]="card.faceCSS"></span>
                        </div>
                    </div>
                </div>`,
    styleUrls: ['./game.component.css']
    
})
export class CardComponent implements OnInit {
    @Input() card: Card
    @Output() eventClick = new EventEmitter();

    constructor(@Inject(JQ_TOKEN) private $: any, public toastr: ToastrService) { }

    ngOnInit() {  
       console.log(this.$(this));
       this.toastr.alert('sss','ddddd');
    }

    @HostListener('click', ['$event.target']) flipOver(crd){
        this.card.isHidden = !this.card.isHidden;
        this.eventClick.emit(this.card);
    }
 
    
   

}