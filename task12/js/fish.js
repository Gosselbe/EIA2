var task12;
(function (task12) {
    class FischInterface extends task12.BubbleInterface1 {
        constructor() {
            super();
            this.x = Math.random() * task12.canvas.width;
            this.y = Math.random() * task12.canvas.height;
            this.dx = -10;
            this.dy = 0;
        }
        draw() {
            let fishi = new Path2D();
            fishi.arc(this.x, this.y - 200, 50, 0, 2 * Math.PI);
            task12.zweid.fillStyle = "Pink";
            task12.zweid.fill(fishi);
            task12.zweid.stroke(fishi);
            let flo = new Path2D();
            flo.moveTo(this.x + 48, this.y - 200);
            flo.lineTo(this.x + 90, this.y - 170);
            flo.lineTo(this.x + 90, this.y - 230);
            flo.closePath();
            task12.zweid.fillStyle = "Pink";
            task12.zweid.fill(flo);
            task12.zweid.stroke(flo);
            let eye1 = new Path2D();
            eye1.arc(this.x - 30, this.y - 190, 10, 0, 2 * Math.PI);
            task12.zweid.fillStyle = "White";
            task12.zweid.fill(eye1);
            task12.zweid.stroke(eye1);
            let dot1 = new Path2D();
            dot1.arc(this.x - 33, this.y - 190, 5, 0, 2 * Math.PI);
            task12.zweid.fillStyle = "Black";
            task12.zweid.fill(dot1);
            task12.zweid.stroke(dot1);
            let brow = new Path2D();
            brow.moveTo(this.x - 33, this.y - 210);
            brow.lineTo(this.x - 20, this.y - 205);
            task12.zweid.fill(brow);
            task12.zweid.stroke(brow);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = (1200) + this.dx;
            }
        }
    }
    task12.FischInterface = FischInterface;
})(task12 || (task12 = {}));
//# sourceMappingURL=fish.js.map