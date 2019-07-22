namespace endabgabe{
    export class BubbleClass1 extends Bewegung {//kleine Bubbles

        type:number;
        constructor(_x:number, _y:number){
            super();
            this.x=_x * canvas.width;
            this.y=_y * canvas.height;
            this.dx=_x * 0;
            this.dy=_y * -10;
            this.type=2;
        }
        

        draw(): void {
            let bub1: Path2D = new Path2D();
            bub1.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "DodgerBlue";
            zweid.fill(bub1);
            zweid.stroke(bub1);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if(this.y <-100){
                this.y= +700+ this.dy ;
            }
        }
    }
}