namespace endabgabe {
    export class FischClass extends Bewegung {//kleine Fischis

        type:number;
        constructor(_x: number, _y: number) {
            super();
            this.x = _x * canvas.width;
            this.y = _y * canvas.height;
            this.dx = _x * -4;
            this.dy = _y * 0;
            this.type = 3;
        }
        

        draw(): void {
            let fishi: Path2D = new Path2D();
            fishi.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "Pink";
            zweid.fill(fishi);
            zweid.stroke(fishi);

            let flo: Path2D = new Path2D();
            flo.moveTo(this.x + 10, this.y);
            flo.lineTo(this.x + 20, this.y - 10);
            flo.lineTo(this.x + 20, this.y + 10)
            flo.closePath();
            zweid.fillStyle = "Pink";
            zweid.fill(flo);
            zweid.stroke(flo);

            let eye1: Path2D = new Path2D();
            eye1.arc(this.x - 3, this.y, 5, 0, 2 * Math.PI);
            zweid.fillStyle = "White";
            zweid.fill(eye1);
            zweid.stroke(eye1);

            let dot1: Path2D = new Path2D();
            dot1.arc(this.x - 5, this.y, 2, 0, 2 * Math.PI);
            zweid.fillStyle = "Black";
            zweid.fill(dot1);
            zweid.stroke(dot1);

            let brow: Path2D = new Path2D();
            brow.moveTo(this.x - 3, this.y - 7);
            brow.lineTo(this.x + 5, this.y - 4);
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
            if (this.x < 0) {
                this.x = (1200) + this.dx;
            }
        }


    }

}