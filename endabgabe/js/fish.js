var endabgabe;
(function (endabgabe) {
    class FischClass extends endabgabe.Bewegung {
        constructor(_x, _y) {
            super();
            this.x = _x * canvas.width;
            this.y = _y * canvas.height;
            this.dx = _x * -4;
            this.dy = _y * 0;
            this.type = 3;
        }
        draw() {
            let fishi = new Path2D();
            fishi.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "Pink";
            zweid.fill(fishi);
            zweid.stroke(fishi);
            let flo = new Path2D();
            flo.moveTo(this.x + 10, this.y);
            flo.lineTo(this.x + 20, this.y - 10);
            flo.lineTo(this.x + 20, this.y + 10);
            flo.closePath();
            zweid.fillStyle = "Pink";
            zweid.fill(flo);
            zweid.stroke(flo);
            let eye1 = new Path2D();
            eye1.arc(this.x - 3, this.y, 5, 0, 2 * Math.PI);
            zweid.fillStyle = "White";
            zweid.fill(eye1);
            zweid.stroke(eye1);
            let dot1 = new Path2D();
            dot1.arc(this.x - 5, this.y, 2, 0, 2 * Math.PI);
            zweid.fillStyle = "Black";
            zweid.fill(dot1);
            zweid.stroke(dot1);
            let brow = new Path2D();
            brow.moveTo(this.x - 3, this.y - 7);
            brow.lineTo(this.x + 5, this.y - 4);
            zweid.fill(brow);
            zweid.stroke(brow);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = (1200) + this.dx;
            }
        }
    }
    endabgabe.FischClass = FischClass;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=fish.js.map