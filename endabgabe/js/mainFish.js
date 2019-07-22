var endabgabe;
(function (endabgabe) {
    class MainFish extends endabgabe.Alles {
        constructor(_x, _y) {
            super();
            this.size = 20;
            this.eyeSize = 7;
            this.dotSize = 3;
            this.flo1x = 20;
            this.flo2x = 40;
            this.flo3x = 40;
            this.flo1y = 0;
            this.flo2y = 14;
            this.flo3y = 14;
            this.x = _x;
            this.y = _y;
        }
        draw() {
            let flo = new Path2D();
            flo.moveTo(this.x + this.flo1x, this.y + this.flo1y);
            flo.lineTo(this.x + this.flo2x, this.y + this.flo2y);
            flo.lineTo(this.x + this.flo3x, this.y - this.flo3y);
            flo.closePath();
            endabgabe.zweid.fillStyle = "Lime";
            endabgabe.zweid.fill(flo);
            endabgabe.zweid.stroke(flo);
            let fishi = new Path2D();
            fishi.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "Lime";
            endabgabe.zweid.fill(fishi);
            endabgabe.zweid.stroke(fishi);
            let eye1 = new Path2D();
            eye1.arc(this.x - 10, this.y, this.eyeSize, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "white";
            endabgabe.zweid.fill(eye1);
            endabgabe.zweid.stroke(eye1);
            let dot1 = new Path2D();
            dot1.arc(this.x - 13, this.y, this.dotSize, 0, 2 * Math.PI);
            endabgabe.zweid.fillStyle = "Black";
            endabgabe.zweid.fill(dot1);
            endabgabe.zweid.stroke(dot1);
        }
    }
    endabgabe.MainFish = MainFish;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=mainFish.js.map