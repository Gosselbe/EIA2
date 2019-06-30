namespace task12 {
    export class FischInterface extends BubbleInterface1{

        constructor(){
            super();
            this.x= Math.random()*canvas.width;
            this.y= Math.random()*canvas.height;
            this.dx= -10;
            this.dy= 0;
        }

        draw(): void {
            let fishi: Path2D = new Path2D();
            fishi.arc(this.x, this.y - 200, 50, 0, 2 * Math.PI);
            zweid.fillStyle = "Pink";
            zweid.fill(fishi);
            zweid.stroke(fishi);

            let flo: Path2D = new Path2D();
            flo.moveTo(this.x + 48, this.y - 200);
            flo.lineTo(this.x + 90, this.y - 170);
            flo.lineTo(this.x + 90, this.y - 230)
            flo.closePath();
            zweid.fillStyle = "Pink";
            zweid.fill(flo);
            zweid.stroke(flo);

            let eye1: Path2D = new Path2D();
            eye1.arc(this.x - 30, this.y - 190, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "White";
            zweid.fill(eye1);
            zweid.stroke(eye1);

            let dot1: Path2D = new Path2D();
            dot1.arc(this.x - 33, this.y - 190, 5, 0, 2 * Math.PI);
            zweid.fillStyle = "Black";
            zweid.fill(dot1);
            zweid.stroke(dot1);

            let brow: Path2D = new Path2D();
            brow.moveTo(this.x - 33, this.y - 210);
            brow.lineTo(this.x - 20, this.y - 205);
            zweid.fill(brow);
            zweid.stroke(brow);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if(this.x < 0){
                this.x = (1200)+this.dx;
            }
        }


    }

    

   

   
}