namespace endabgabe{

    export class FischClass3 extends Bewegung { //giganto großer Fisch
    
        constructor( _y:number){
            super();
            this.x=Math.random()* canvas.width+canvas.width;
            this.y=_y * canvas.height;
            this.dx=5+Math.random()*2;
            this.dy=_y * 0;
            this.type=6;
        }
        type:number=6;
    
        draw(): void {
            let fishi: Path2D = new Path2D();
            fishi.arc(this.x, this.y, 170, 0, 2 * Math.PI);
            zweid.fillStyle = "LightCoral";
            zweid.fill(fishi);
            zweid.stroke(fishi);
    
            let flo: Path2D = new Path2D();
            flo.moveTo(this.x -240, this.y - 90);
            flo.lineTo(this.x -240, this.y +90);
            flo.lineTo(this.x -170, this.y )
            flo.closePath();
            zweid.fillStyle = "LightCoral";
            zweid.fill(flo);
            zweid.stroke(flo);
    
            let eye1: Path2D = new Path2D();
            eye1.arc(this.x+90, this.y+50, 20, 0, 2 * Math.PI);
            zweid.fillStyle = "White";
            zweid.fill(eye1);
            zweid.stroke(eye1);
    
            let dot1: Path2D = new Path2D();
            dot1.arc(this.x+94, this.y+54, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "Black";
            
            zweid.fill(dot1);
            zweid.stroke(dot1);
    
            let brow: Path2D = new Path2D();
            brow.moveTo(this.x+136, this.y+100);
            brow.lineTo(this.x+70 , this.y +130);
            zweid.fill(brow);
            zweid.stroke(brow);
        }
    
        update(): void {
            this.move();
            this.draw();
        }
    
         move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if(this.x > 1200){
                this.x = -800 + this.dx;
            }
         }
    }
    }