var endabgabe;
(function (endabgabe) {
    class FischClass1 extends endabgabe.Bewegung {
        constructor(_y) {
            super();
            this.x = Math.random() * canvas.width + canvas.width;
            this.y = _y * canvas.height;
            this.dx = 2 + Math.random() * 2;
            this.dy = _y * 0;
            this.type = 4;
        }
        draw() {
            let fishi = new Path2D();
            fishi.arc(this.x, this.y, 60, 0, 2 * Math.PI);
            zweid.fillStyle = "Plum";
            zweid.fill(fishi);
            zweid.stroke(fishi);
            let flo = new Path2D();
            flo.moveTo(this.x - 100, this.y - 40);
            flo.lineTo(this.x - 100, this.y + 30);
            flo.lineTo(this.x - 60, this.y);
            flo.closePath();
            zweid.fillStyle = "Plum";
            zweid.fill(flo);
            zweid.stroke(flo);
            let eye1 = new Path2D();
            eye1.arc(this.x + 20, this.y, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "White";
            zweid.fill(eye1);
            zweid.stroke(eye1);
            let dot1 = new Path2D();
            dot1.arc(this.x + 20, this.y, 5, 0, 2 * Math.PI);
            zweid.fillStyle = "Black";
            zweid.fill(dot1);
            zweid.stroke(dot1);
            let brow = new Path2D();
            brow.moveTo(this.x + 40, this.y - 15);
            brow.lineTo(this.x + 15, this.y - 30);
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
            if (this.x > 1200) {
                this.x = -800 + this.dx;
            }
        }
    }
    endabgabe.FischClass1 = FischClass1;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=fish1.js.map