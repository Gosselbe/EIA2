var task12;
(function (task12) {
    class Superklasse {
        constructor(_x) {
            /*this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = 0;
            this.dy = -10;*/
            this.x = 630;
            this.y = 485;
            this.dx = _x * 4;
            this.dy = Math.random() * -15;
        }
        draw() {
            let bub = new Path2D();
            bub.arc(this.x + Math.random(), this.y + Math.random(), 20, 0, 2 * Math.PI);
            task12.zweid.fillStyle = "DodgerBlue";
            task12.zweid.fill(bub);
            task12.zweid.stroke(bub);
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
    task12.Superklasse = Superklasse;
})(task12 || (task12 = {}));
//# sourceMappingURL=superklasse.js.map