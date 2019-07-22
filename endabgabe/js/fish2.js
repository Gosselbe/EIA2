var endabgabe;
(function (endabgabe) {
    class FischClass2 extends endabgabe.Bewegung {
        constructor(_x, _y) {
            super();
            this.type = 5;
            this.x = _x * endabgabe.canvas.width;
            this.y = _y * endabgabe.canvas.height;
            this.dx = 2 + Math.random() * 2;
            this.dy = _y * 0;
        }
        draw() {
            let fishi = new Path2D();
            fishi.arc(this.x, this.y, 90, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "MediumVioletRed";
            endabgabe.zweid.fill(fishi);
            endabgabe.zweid.stroke(fishi);
            let flo = new Path2D();
            flo.moveTo(this.x - 120, this.y - 50);
            flo.lineTo(this.x - 120, this.y + 40);
            flo.lineTo(this.x - 90, this.y);
            flo.closePath();
            endabgabe.zweid.fillStyle = "MediumVioletRed";
            endabgabe.zweid.fill(flo);
            endabgabe.zweid.stroke(flo);
            let eye1 = new Path2D();
            eye1.arc(this.x + 50, this.y + 20, 20, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "White";
            endabgabe.zweid.fill(eye1);
            endabgabe.zweid.stroke(eye1);
            let dot1 = new Path2D();
            dot1.arc(this.x + 55, this.y + 20, 10, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "Black";
            endabgabe.zweid.fill(dot1);
            endabgabe.zweid.stroke(dot1);
            let brow = new Path2D();
            brow.moveTo(this.x + 70, this.y - 10);
            brow.lineTo(this.x + 40, this.y - 25);
            endabgabe.zweid.fill(brow);
            endabgabe.zweid.stroke(brow);
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
    endabgabe.FischClass2 = FischClass2;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=fish2.js.map