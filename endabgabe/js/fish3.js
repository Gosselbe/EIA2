var endabgabe;
(function (endabgabe) {
    class FischClass3 extends endabgabe.Bewegung {
        constructor(_y) {
            super();
            this.type = 6;
            this.x = Math.random() * endabgabe.canvas.width + endabgabe.canvas.width;
            this.y = _y * endabgabe.canvas.height;
            this.dx = 5 + Math.random() * 2;
            this.dy = _y * 0;
            this.type = 6;
        }
        draw() {
            let fishi = new Path2D();
            fishi.arc(this.x, this.y, 170, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "LightCoral";
            endabgabe.zweid.fill(fishi);
            endabgabe.zweid.stroke(fishi);
            let flo = new Path2D();
            flo.moveTo(this.x - 240, this.y - 90);
            flo.lineTo(this.x - 240, this.y + 90);
            flo.lineTo(this.x - 170, this.y);
            flo.closePath();
            endabgabe.zweid.fillStyle = "LightCoral";
            endabgabe.zweid.fill(flo);
            endabgabe.zweid.stroke(flo);
            let eye1 = new Path2D();
            eye1.arc(this.x + 90, this.y + 50, 20, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "White";
            endabgabe.zweid.fill(eye1);
            endabgabe.zweid.stroke(eye1);
            let dot1 = new Path2D();
            dot1.arc(this.x + 94, this.y + 54, 10, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "Black";
            endabgabe.zweid.fill(dot1);
            endabgabe.zweid.stroke(dot1);
            let brow = new Path2D();
            brow.moveTo(this.x + 136, this.y + 100);
            brow.lineTo(this.x + 70, this.y + 130);
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
    endabgabe.FischClass3 = FischClass3;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=fish3.js.map