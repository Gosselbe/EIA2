namespace task11{

    export class BubbleInterface1 {
        x: number;
        y: number;
        dx: number;
        dy: number;

        drawBubble1(): void {
            let bub1: Path2D = new Path2D();
            bub1.arc(this.x, this.y - 40, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "DodgerBlue";
            zweid.fill(bub1);
            zweid.stroke(bub1);
        }

        update(): void {
            this.move();
            this.drawBubble1();
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