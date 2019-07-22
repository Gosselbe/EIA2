namespace endabgabe{

    export class MainFish extends Alles {

        constructor(_x:number, _y:number){
            super();
            this.x=_x ;
            this.y=_y ;
        }

        size: number= 20;
        eyeSize:number=7;
        dotSize:number=3;
        flo1x:number=20;
        flo2x:number=40;
        flo3x:number=40;
        flo1y:number=0;
        flo2y:number=14;
        flo3y:number=14;

        draw():void{
        let flo: Path2D = new Path2D();
        flo.moveTo(this.x+this.flo1x, this.y+this.flo1y);
        flo.lineTo(this.x + this.flo2x, this.y+this.flo2y);
        flo.lineTo(this.x + this.flo3x, this.y-this.flo3y);
        flo.closePath();
        zweid.fillStyle = "Lime";
        zweid.fill(flo);
        zweid.stroke(flo);
        
        let fishi: Path2D = new Path2D();
        fishi.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        zweid.fillStyle = "Lime";
        zweid.fill(fishi);
        zweid.stroke(fishi);


        let eye1: Path2D = new Path2D();
        eye1.arc(this.x-10, this.y, this.eyeSize, 0, 2 * Math.PI);
        zweid.fillStyle = "white";
        zweid.fill(eye1);
        zweid.stroke(eye1);

        let dot1: Path2D = new Path2D();
        dot1.arc(this.x-13, this.y, this.dotSize, 0, 2 * Math.PI);
        zweid.fillStyle = "Black";
        zweid.fill(dot1);
        zweid.stroke(dot1);
        }
    

    }
}