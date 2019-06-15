namespace task11{

export class BubbleInterface {
    x: number;
    y: number;
    dx: number;
    dy: number;

    drawBubble(): void {
        let bub: Path2D = new Path2D();
        bub.arc(this.x + Math.random(), this.y +Math.random(), 20, 0, 2 * Math.PI);
        zweid.fillStyle = "DodgerBlue";
        zweid.fill(bub);
        zweid.stroke(bub);
    }

    update(): void {
        this.move();
        this.drawBubble();
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