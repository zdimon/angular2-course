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