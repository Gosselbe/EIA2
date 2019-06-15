var task11;
(function (task11) {
    class FischInterface1 {
        drawFish1() {
            let fishi = new Path2D();
            fishi.arc(this.x + 800, this.y - 4, 60, 0, 2 * Math.PI);
            task11.zweid.fillStyle = "Plum";
            task11.zweid.fill(fishi);
            task11.zweid.stroke(fishi);
            let flo = new Path2D();
            flo.moveTo(this.x + 690, this.y - 40);
            flo.lineTo(this.x + 690, this.y + 30);
            flo.lineTo(this.x + 739, this.y - 4);
            flo.closePath();
            task11.zweid.fillStyle = "Plum";
            task11.zweid.fill(flo);
            task11.zweid.stroke(flo);
            let eye1 = new Path2D();
            eye1.arc(this.x + 830, this.y - 4, 10, 0, 2 * Math.PI);
            task11.zweid.fillStyle = "White";
            task11.zweid.fill(eye1);
            task11.zweid.stroke(eye1);
            let dot1 = new Path2D();
            dot1.arc(this.x + 834, this.y - 4, 5, 0, 2 * Math.PI);
            task11.zweid.fillStyle = "Black";
            task11.zweid.fill(dot1);
            task11.zweid.stroke(dot1);
            let brow = new Path2D();
            brow.moveTo(this.x + 839, this.y - 15);
            brow.lineTo(this.x + 820, this.y - 20);
            task11.zweid.fill(brow);
            task11.zweid.stroke(brow);
        }
        update() {
            this.move();
            this.drawFish1();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 1200) {
                this.x = -800 + this.dx;
            }
        }
    }
    task11.FischInterface1 = FischInterface1;
})(task11 || (task11 = {}));
//# sourceMappingURL=fish1.js.map