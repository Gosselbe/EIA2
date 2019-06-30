namespace task12 {

    export class Superklasse {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor(_x:number) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = 0;
            this.dy = -10;
           /* this.x = 630;
            this.y = 485;
            this.dx = _x * 4;
            this.dy = Math.random() * -15;*/
        }


        draw(): void {
            let bub: Path2D = new Path2D();
            bub.arc(this.x + Math.random(), this.y + Math.random(), 20, 0, 2 * Math.PI);
            zweid.fillStyle = "DodgerBlue";
            zweid.fill(bub);
            zweid.stroke(bub);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < -100) {
                this.y = +700 + this.dy;
            }
        }
    }
}