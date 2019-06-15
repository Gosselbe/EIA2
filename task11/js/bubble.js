var task11;
(function (task11) {
    class BubbleInterface {
        drawBubble() {
            let bub = new Path2D();
            bub.arc(this.x + Math.random(), this.y + Math.random(), 20, 0, 2 * Math.PI);
            task11.zweid.fillStyle = "DodgerBlue";
            task11.zweid.fill(bub);
            task11.zweid.stroke(bub);
        }
        update() {
            this.move();
            this.drawBubble();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < -100) {
                this.y = +700 + this.dy;
            }
        }
    }
    task11.BubbleInterface = BubbleInterface;
})(task11 || (task11 = {}));
//# sourceMappingURL=bubble.js.map