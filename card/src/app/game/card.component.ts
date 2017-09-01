import { Component, OnInit, Input, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { Card } from './Card';
import { JQ_TOKEN } from '../jquery.service';
import { ToastrService } from '../toatr.service';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
    selector: 'card',
    template: ` <div class="card_cell">
                    <div *ngIf="card" [ngClass]="{'isHighlighted': card.isHighlighted}">
                        {{ card.state }}
                        <div class="card back" *ngIf="card.isHidden">*</div>
                        <div *ngIf="!card.isHidden"  class="card rank-{{card.name}} {{card.faceName }}">
                            <span class="rank">{{card.name}}</span>
                            <span class="suit" [innerHTML]="card.faceCSS"></span>
                        </div>
                    </div>
                </div>`,
    styleUrls: ['./game.component.css'],
    animations: [
        trigger('cardState', [
          state('close', style({
            width: '0px',
            overflow: 'hidden'
          })),
          state('open',   style({
            width: '*',
            overflow: 'hidden'
          })),
          transition('* => *', animate('1s  ease-in-out')),
        ])
      ]
    
})
export class CardComponent implements OnInit {
    @Input() card: Card
    @Output() eventClick = new EventEmitter();
    status_cover: string;
    status_face: string;

    constructor(@Inject(JQ_TOKEN) private $: any, public toastr: ToastrService) { }

    ngOnInit() {  
       //console.log(this.$(this));
       //this.toastr.alert('sss','ddddd');
      
    }

    @HostListener('click', ['$event.target']) flipOver(crd){
        this.card.isHidden = !this.card.isHidden;
        if(this.card.isHidden){
            this.status_cover = 'open';
            this.status_face = 'close';            
        } else {
            this.status_cover = 'close';
            this.status_face = 'open';            
        }
       
        this.eventClick.emit(this.card);
    }
 
    
   

}


