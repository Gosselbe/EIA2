var task12;
(function (task12) {
    class food extends task12.Superklasse {
        constructor(_x, _y) {
            super(Math.random());
            this.x = _x;
            this.y = _y;
            this.dx = Math.random() * 0.3;
            this.dy = Math.random() * 4;
        }
        draw() {
            let futter = new Path2D();
            futter.arc(this.x, this.y, 3, Math.PI, 2 * Math.PI);
            futter.lineTo(this.x + 3, this.y + 10);
            futter.arc(this.x, this.y + 10, 3, 0, Math.PI);
            futter.bezierCurveTo(this.x + 1, this.y + 5, this.x - 4, this.y + 5, this.x - 3, this.y);
            task12.zweid.fillStyle = "burlywood";
            task12.zweid.strokeStyle = "saddlebrown";
            task12.zweid.fill(futter);
            task12.zweid.stroke(futter);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 580) {
                this.y = 580;
                this.x = this.x -= this.dx;
            }
        }
    }
    task12.food = food;
})(task12 || (task12 = {}));
//# sourceMappingURL=food.js.map