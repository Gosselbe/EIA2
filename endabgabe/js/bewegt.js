var endabgabe;
(function (endabgabe) {
    class Bewegung extends endabgabe.Alles {
        constructor() {
            super();
            //
        }
        draw() {
            //
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    endabgabe.Bewegung = Bewegung;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=bewegt.js.map