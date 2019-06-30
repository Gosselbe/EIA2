var task12;
(function (task12) {
    class FischInterface1 extends task12.FischInterface {
        constructor() {
            super();
            this.x = Math.random() * task12.canvas.width;
            this.y = Math.random() * task12.canvas.height;
            this.dx = +5;
            this.dy = 0;
        }
        draw() {
            let fishi = new Path2D();
            fishi.arc(this.x + 800, this.y - 4, 60, 0, 2 * Math.PI);
            task12.zweid.fillStyle = "Plum";
            task12.zweid.fill(fishi);
            task12.zweid.stroke(fishi);
            let flo = new Path2D();
            flo.moveTo(this.x + 690, this.y - 40);
            flo.lineTo(this.x + 690, this.y + 30);
            flo.lineTo(this.x + 739, this.y - 4);
            flo.closePath();
            task12.zweid.fillStyle = "Plum";
            task12.zweid.fill(flo);
            task12.zweid.stroke(flo);
            let eye1 = new Path2D();
            eye1.arc(this.x + 830, this.y - 4, 10, 0, 2 * Math.PI);
            task12.zweid.fillStyle = "White";
            task12.zweid.fill(eye1);
            task12.zweid.stroke(eye1);
            let dot1 = new Path2D();
            dot1.arc(this.x + 834, this.y - 4, 5, 0, 2 * Math.PI);
            task12.zweid.fillStyle = "Black";
            task12.zweid.fill(dot1);
            task12.zweid.stroke(dot1);
            let brow = new Path2D();
            brow.moveTo(this.x + 839, this.y - 15);
            brow.lineTo(this.x + 820, this.y - 20);
            task12.zweid.fill(brow);
            task12.zweid.stroke(brow);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 1200) {
                this.x = -800 + this.dx;
            }
        }
    }
    task12.FischInterface1 = FischInterface1;
})(task12 || (task12 = {}));
//# sourceMappingURL=fish1.js.map