import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'card',
    template: `
                        <div class="card"><span class="rank" style="color: red">{{ number }}</span></div>
                       
              `
    
})
export class CardComponent implements OnInit {
    @Input() number: number
    constructor() { }

    ngOnInit() {  
        

    }

   
   

}