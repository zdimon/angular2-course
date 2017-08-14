import { Component } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ischange: boolean;
  ammount: number;
  total: number;
  current: number;
  numbers: any;
  win: number;
  loss: number;

  right: number;
  gess: number;
  arr: any[];
  arr2: any[];

  constructor(){
    this.win = 0;
    this.loss = 0;
    this.ischange = false;
    this.total = 5;
    this.ammount = 3;
    this.current = 0;
    this.numbers = [];

    this.right = 0;
    this.gess = 0;
    this.arr = [];
    this.arr2 = [];

    for(let i=0; i<=this.ammount+1;i+=1)
      {
        this.numbers.push(0);
      }
  }

  start(): void {
    this.win = 0;
    this.loss = 0;
    //console.log('Start');
    for(let i=0; i<=this.total-1; i+=1){
        this.current += 1;
        this.count();

    }
    
  }

  count(){
    this.arr2 = [];
    this.arr = [];
    for(let i=1; i<=this.ammount; i+=1){
      this.arr.push(i)
    }
    this.right = this.getRandom(this.arr);
    this.gess = this.getRandom(this.arr);

    //console.log(`right:${this.right}  gess:${this.gess}: `);
    
    this.arr2.push(this.gess);

    
    if(this.right==this.gess){
      this.arr.splice(this.arr.indexOf(this.right),1);
      let r = this.getRandom(this.arr);
      this.arr2.push(r);

    } else {
      this.arr2.push(this.right);
    }
    
    if(this.ischange){
      this.arr2.forEach(v=>{
        if(v!==this.gess){
          this.gess = v
        }
      });

    }
    
    //console.log(this.arr2);
    //console.log(`right:${this.right}  gess:${this.gess}: `);

    if(this.right==this.gess){
      this.win +=1;
    } else {
      this.loss +=1;
    }

  }

  getRandom(items) {
      return items[Math.floor(Math.random()*items.length)];
  }

  test(): void {
    
  }  


}




@Pipe({name: 'demoNumber'})
export class DemoNumber implements PipeTransform {
  transform(value, args:string[]) : any {
    let res = [];
    for (let i = 0; i < value; i++) {
        res.push(i);
      }
      return res;
  }
}
