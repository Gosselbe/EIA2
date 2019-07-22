var endabgabe;
(function (endabgabe) {
    class BubbleClass1 extends endabgabe.Bewegung {
        constructor(_x, _y) {
            super();
            this.x = _x * endabgabe.canvas.width;
            this.y = _y * endabgabe.canvas.height;
            this.dx = _x * 0;
            this.dy = _y * -10;
            this.type = 2;
        }
        draw() {
            let bub1 = new Path2D();
            bub1.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "DodgerBlue";
            endabgabe.zweid.fill(bub1);
            endabgabe.zweid.stroke(bub1);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < -100) {
                this.y = +700 + this.dy;
            }
        }
    }
    endabgabe.BubbleClass1 = BubbleClass1;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=bubble1.js.map