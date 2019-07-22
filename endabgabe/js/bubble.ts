namespace endabgabe{

export class BubbleClass extends Bewegung{//große Bubbles

    type:number;
    constructor(_x:number, _y:number){
        super();
        this.x=_x * canvas.width;
        this.y=_y * canvas.height;
        this.dx=_x * 0;
        this.dy=_y * -10;
        this.type=1;
    }
    

    draw(): void {
        let bub: Path2D = new Path2D();
        bub.arc(this.x, this.y, 20, 0, 2 * Math.PI);
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
        if(this.y <-100){
            this.y= +700+ this.dy ;
        }
        
    }
}
}