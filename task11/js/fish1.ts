namespace task11{

export class FischInterface1 {
    x: number;
    y: number;
    dx: number;
    dy: number;

    drawFish1(): void {
        let fishi: Path2D = new Path2D();
        fishi.arc(this.x + 800, this.y - 4, 60, 0, 2 * Math.PI);
        zweid.fillStyle = "Plum";
        zweid.fill(fishi);
        zweid.stroke(fishi);

        let flo: Path2D = new Path2D();
        flo.moveTo(this.x + 690, this.y - 40);
        flo.lineTo(this.x + 690, this.y + 30);
        flo.lineTo(this.x + 739, this.y - 4)
        flo.closePath();
        zweid.fillStyle = "Plum";
        zweid.fill(flo);
        zweid.stroke(flo);

        let eye1: Path2D = new Path2D();
        eye1.arc(this.x + 830, this.y - 4, 10, 0, 2 * Math.PI);
        zweid.fillStyle = "White";
        zweid.fill(eye1);
        zweid.stroke(eye1);

        let dot1: Path2D = new Path2D();
        dot1.arc(this.x + 834, this.y - 4, 5, 0, 2 * Math.PI);
        zweid.fillStyle = "Black";
        
        zweid.fill(dot1);
        zweid.stroke(dot1);

        let brow: Path2D = new Path2D();
        brow.moveTo(this.x + 839, this.y - 15);
        brow.lineTo(this.x + 820, this.y - 20);
        zweid.fill(brow);
        zweid.stroke(brow);
    }

    update(): void {
        this.move();
        this.drawFish1();
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