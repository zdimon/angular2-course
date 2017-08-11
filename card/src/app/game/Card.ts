export class Card{
    name: string;
    face: string;
    faceCSS: string;
    faceName: string;
    rate: number;
    image: string;
    isHidden: boolean;
    id: string;

    constructor(name: string, face: string, rate: number){
        this.isHidden = false;
        this.name = name;
        this.face = face;
        this.rate = rate;
        this.image = 'assets/images/'+this.face+'_'+this.rate+'.svg'
        this.id = `#{this.face}-#{this.name}`
        switch (this.face) {
            case 'H': {
                this.faceCSS = "&hearts;";
                this.faceName = "hearts";
                break;
            }
            case 'D': {
                this.faceCSS = '&diams;';
                this.faceName = "diams";
                break;
            }
            case 'C': {
                this.faceCSS = '&clubs;';
                this.faceName = "clubs";
                break;
            }
            case 'S': {
                this.faceCSS = '&spades;';
                this.faceName = "spades";
                break;
            }
            default: {
                this.faceCSS =  ''
                this.faceName = "";
                break;
            }
        }
    }
    public show(){
        return this.image;      
    }
 
    public getRank(){
        if(this.rate<=10) {
            return this.name;
        } else if (this.rate==11) {
            return 'J'
        } else if(this.rate == 12) {
            return 'Q'
        } else if (this.rate==13) {
            return 'K'
        } else if(this.rate == 14){
            return 'A'
        }    
    }  
    
    
   

} 