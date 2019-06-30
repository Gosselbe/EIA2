namespace task12 {

    export class BubbleInterface1 extends Superklasse {

        constructor() {
            super(Math.random())
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = 0;
            this.dy = -10;
        }

        draw(): void {
            let bub1: Path2D = new Path2D();
            bub1.arc(this.x, this.y - 40, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "DodgerBlue";
            zweid.fill(bub1);
            zweid.stroke(bub1);
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