var task11;
(function (task11) {
    class FischInterface {
        drawFish() {
            let fishi = new Path2D();
            fishi.arc(this.x, this.y - 200, 50, 0, 2 * Math.PI);
            task11.zweid.fillStyle = "Pink";
            task11.zweid.fill(fishi);
            task11.zweid.stroke(fishi);
            let flo = new Path2D();
            flo.moveTo(this.x + 48, this.y - 200);
            flo.lineTo(this.x + 90, this.y - 170);
            flo.lineTo(this.x + 90, this.y - 230);
            flo.closePath();
            task11.zweid.fillStyle = "Pink";
            task11.zweid.fill(flo);
            task11.zweid.stroke(flo);
            let eye1 = new Path2D();
            eye1.arc(this.x - 30, this.y - 190, 10, 0, 2 * Math.PI);
            task11.zweid.fillStyle = "White";
            task11.zweid.fill(eye1);
            task11.zweid.stroke(eye1);
            let dot1 = new Path2D();
            dot1.arc(this.x - 33, this.y - 190, 5, 0, 2 * Math.PI);
            task11.zweid.fillStyle = "Black";
            task11.zweid.fill(dot1);
            task11.zweid.stroke(dot1);
            let brow = new Path2D();
            brow.moveTo(this.x - 33, this.y - 210);
            brow.lineTo(this.x - 20, this.y - 205);
            task11.zweid.fill(brow);
            task11.zweid.stroke(brow);
        }
        update() {
            this.move();
            this.drawFish();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = (1200) + this.dx;
            }
        }
    }
    task11.FischInterface = FischInterface;
})(task11 || (task11 = {}));
//# sourceMappingURL=canvas.js.map