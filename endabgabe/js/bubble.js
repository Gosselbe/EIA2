var endabgabe;
(function (endabgabe) {
    class BubbleClass extends endabgabe.Bewegung {
        constructor(_x, _y) {
            super();
            this.x = _x * canvas.width;
            this.y = _y * canvas.height;
            this.dx = _x * 0;
            this.dy = _y * -10;
            this.type = 1;
        }
        draw() {
            let bub = new Path2D();
            bub.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            zweid.fillStyle = "DodgerBlue";
            zweid.fill(bub);
            zweid.stroke(bub);
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
    endabgabe.BubbleClass = BubbleClass;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=bubble.js.map