export class Card{
    name: string;
    face: number;
    rate: number;
    image: string;
    constructor(name: string, face: number, rate: number){
        this.name = name;
        this.face = face;
        this.rate = rate;
        this.image = 'assets/images/'+this.face+'_'+this.rate+'.svg'
    }
    public show(){
        return this.image;      
    } 
} 