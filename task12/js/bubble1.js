var task12;
(function (task12) {
    class BubbleInterface1 extends task12.Superklasse {
        constructor() {
            super(Math.random());
            this.x = Math.random() * task12.canvas.width;
            this.y = Math.random() * task12.canvas.height;
            this.dx = 0;
            this.dy = -10;
        }
        draw() {
            let bub1 = new Path2D();
            bub1.arc(this.x, this.y - 40, 10, 0, 2 * Math.PI);
            task12.zweid.fillStyle = "DodgerBlue";
            task12.zweid.fill(bub1);
            task12.zweid.stroke(bub1);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < -100) {
                this.y = +700 + this.dy;
            }
        }
    }
    task12.BubbleInterface1 = BubbleInterface1;
})(task12 || (task12 = {}));
//# sourceMappingURL=bubble1.js.map