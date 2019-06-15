var task11;
(function (task11) {
    class BubbleInterface1 {
        drawBubble1() {
            let bub1 = new Path2D();
            bub1.arc(this.x, this.y - 40, 10, 0, 2 * Math.PI);
            task11.zweid.fillStyle = "DodgerBlue";
            task11.zweid.fill(bub1);
            task11.zweid.stroke(bub1);
        }
        update() {
            this.move();
            this.drawBubble1();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < -100) {
                this.y = +700 + this.dy;
            }
        }
    }
    task11.BubbleInterface1 = BubbleInterface1;
})(task11 || (task11 = {}));
//# sourceMappingURL=bubble1.js.map