var task12;
(function (task12) {
    document.addEventListener("DOMContentLoaded", init);
    let fps = 30;
    task12.SuperklasseArray = [];
    let imageData;
    function init() {
        task12.canvas = document.getElementsByTagName("canvas")[0];
        task12.zweid = task12.canvas.getContext("2d");
        water();
        sand();
        crab(20, 4);
        for (let k = 0; k < 20; k++) {
            let x = Math.random() * task12.canvas.width;
            let y = Math.random() * task12.canvas.height + 300;
            plant(x, y);
        }
        for (let n = 0; n < 20; n++) {
            let x = Math.random() * task12.canvas.width;
            let y = Math.random() * task12.canvas.height + 300;
            plant1(x, y);
        }
        for (let t = 0; t < 20; t++) {
            let x = Math.random() * task12.canvas.width;
            let y = Math.random() * task12.canvas.height + 300;
            stone(x, y);
        }
        task12.canvas.addEventListener("click", task12.feed);
        imageData = task12.zweid.getImageData(0, 0, task12.canvas.width, task12.canvas.height);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * task12.canvas.width;
            let y = Math.random() * task12.canvas.height - 300;
        }
        for (let i = 0; i < 19; i++) {
            let bubbles = new task12.Superklasse(Math.random());
            task12.SuperklasseArray.push(bubbles);
            /*let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = 0;
            let dy: number = -10;
            let bubble: Superklasse;
            bubble = new Superklasse();
            bubble.x = x;
            bubble.y = y;
            bubble.dx = dx;
            bubble.dy = dy;
            Superklasse.push(bubble);
            bubble.draw();*/
        }
        for (let i = 0; i < 19; i++) {
            let bubbles1 = new task12.BubbleInterface1();
            task12.SuperklasseArray.push(bubbles1);
            /*let x2: number = Math.random() * canvas.width;
            let y2: number = Math.random() * canvas.height;
            let dx2: number = 0;
            let dy2: number = -10;
            let bubble1: BubbleInterface1;
            bubble1 = new BubbleInterface1();
            bubble1.x = x2;
            bubble1.y = y2;
            bubble1.dx = dx2;
            bubble1.dy = dy2;
            Superklasse.push(bubble1);
            bubble1.draw();*/
        }
        for (let i = 0; i < 8; i++) {
            let fish = new task12.FischInterface();
            task12.SuperklasseArray.push(fish);
            /*let x: number = Math.random()*canvas.width;
            let y: number = Math.random()*canvas.height;
            let dx: number = -10;
            let dy: number = 0;
            let fish1: FischInterface;
            fish1 = new FischInterface();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1.dy = dy;
            Superklasse.push(fish1);
            fish1.draw();*/
        }
        for (let i = 0; i < 8; i++) {
            let fish1 = new task12.FischInterface1();
            task12.SuperklasseArray.push(fish1);
            /*let x1: number = Math.random() * canvas.width;
            let y1: number = Math.random() * canvas.height;
            let dx1: number = +5;
            let dy1: number = 0;
            let fish2: FischInterface1;
            fish2 = new FischInterface1();
            fish2.x = x1;
            fish2.y = y1;
            fish2.dx = dx1;
            fish2.dy = dy1;
            Superklasse.push(fish2);
            fish2.draw();*/
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        task12.zweid.clearRect(0, 0, task12.canvas.width, task12.canvas.height);
        task12.zweid.putImageData(imageData, 0, 0);
        for (let i = 0; i < task12.Superklasse.length; i++) {
            task12.SuperklasseArray[i].update();
        }
    }
    function water() {
        let wat = new Path2D();
        wat.rect(0, 0, 1200, 500);
        task12.zweid.fillStyle = "LightSkyBlue";
        task12.zweid.fill(wat);
        task12.zweid.stroke(wat);
    }
    function sand() {
        let san = new Path2D();
        san.rect(0, 500, 1200, 300);
        task12.zweid.fillStyle = "Bisque";
        task12.zweid.fill(san);
        task12.zweid.stroke(san);
    }
    function crab(x, y) {
        let body = new Path2D();
        body.rect(x + 50, y + 500, 90, 50);
        task12.zweid.fillStyle = "Red";
        task12.zweid.fill(body);
        task12.zweid.stroke(body);
        let leg1 = new Path2D();
        leg1.moveTo(x + 30, y + 500);
        leg1.lineTo(x + 50, y + 510);
        task12.zweid.fill(leg1);
        task12.zweid.stroke(leg1);
        let leg11 = new Path2D();
        leg11.moveTo(x + 30, y + 500);
        leg11.lineTo(x + 20, y + 505);
        task12.zweid.fill(leg11);
        task12.zweid.stroke(leg11);
        let leg2 = new Path2D();
        leg2.moveTo(x + 30, y + 515);
        leg2.lineTo(x + 50, y + 525);
        task12.zweid.fill(leg2);
        task12.zweid.stroke(leg2);
        let leg22 = new Path2D();
        leg22.moveTo(x + 30, y + 515);
        leg22.lineTo(x + 20, y + 520);
        task12.zweid.fill(leg22);
        task12.zweid.stroke(leg22);
        let leg3 = new Path2D();
        leg3.moveTo(x + 30, y + 530);
        leg3.lineTo(x + 50, y + 540);
        task12.zweid.fill(leg3);
        task12.zweid.stroke(leg3);
        let leg33 = new Path2D();
        leg33.moveTo(x + 30, y + 530);
        leg33.lineTo(x + 20, y + 535);
        task12.zweid.fill(leg33);
        task12.zweid.stroke(leg33);
        let leg4 = new Path2D();
        leg4.moveTo(x + 140, y + 510);
        leg4.lineTo(x + 160, y + 500);
        task12.zweid.fill(leg4);
        task12.zweid.stroke(leg4);
        let leg44 = new Path2D();
        leg44.moveTo(x + 170, y + 505);
        leg44.lineTo(x + 160, y + 500);
        task12.zweid.fill(leg44);
        task12.zweid.stroke(leg44);
        let leg5 = new Path2D();
        leg5.moveTo(x + 140, y + 525);
        leg5.lineTo(x + 160, y + 515);
        task12.zweid.fill(leg5);
        task12.zweid.stroke(leg5);
        let leg55 = new Path2D();
        leg55.moveTo(x + 170, y + 520);
        leg55.lineTo(x + 160, y + 515);
        task12.zweid.fill(leg55);
        task12.zweid.stroke(leg55);
        let leg6 = new Path2D();
        leg6.moveTo(x + 140, y + 540);
        leg6.lineTo(x + 160, y + 530);
        task12.zweid.fill(leg6);
        task12.zweid.stroke(leg6);
        let leg66 = new Path2D();
        leg66.moveTo(x + 170, y + 535);
        leg66.lineTo(x + 160, y + 530);
        task12.zweid.fill(leg66);
        task12.zweid.stroke(leg66);
        let eye1 = new Path2D();
        eye1.arc(x + 80, y + 520, 10, 0, 2 * Math.PI);
        task12.zweid.fillStyle = "White";
        task12.zweid.fill(eye1);
        task12.zweid.stroke(eye1);
        let eye2 = new Path2D();
        eye2.arc(x + 110, y + 520, 10, 0, 2 * Math.PI);
        task12.zweid.fillStyle = "White";
        task12.zweid.fill(eye2);
        task12.zweid.stroke(eye2);
        let dot1 = new Path2D();
        dot1.arc(x + 83, y + 520, 5, 0, 2 * Math.PI);
        task12.zweid.fillStyle = "Black";
        task12.zweid.fill(dot1);
        task12.zweid.stroke(dot1);
        let dot2 = new Path2D();
        dot2.arc(x + 113, y + 520, 5, 0, 2 * Math.PI);
        task12.zweid.fillStyle = "Black";
        task12.zweid.fill(dot2);
        task12.zweid.stroke(dot2);
        let mouth = new Path2D();
        mouth.moveTo(x + 90, y + 540);
        mouth.lineTo(x + 100, y + 540);
        task12.zweid.fill(mouth);
        task12.zweid.stroke(mouth);
    }
    function plant(x, y) {
        let plant1 = new Path2D();
        plant1.moveTo(x + 210, y + 50);
        plant1.lineTo(x + 205, y + 200);
        plant1.lineTo(x + 220, y + 200);
        plant1.closePath();
        task12.zweid.fillStyle = "ForestGreen";
        task12.zweid.fill(plant1);
        task12.zweid.stroke(plant1);
    }
    function plant1(x, y) {
        let plant1 = new Path2D();
        plant1.moveTo(x + 210, y + 100);
        plant1.lineTo(x + 205, y + 200);
        plant1.lineTo(x + 220, y + 200);
        plant1.closePath();
        task12.zweid.fillStyle = "DarkSeaGreen";
        task12.zweid.fill(plant1);
        task12.zweid.stroke(plant1);
    }
    function stone(x, y) {
        let stoned = new Path2D();
        stoned.arc(x + 113, y + 300, 7, 0, 2 * Math.PI);
        task12.zweid.fillStyle = "Sienna";
        task12.zweid.fill(stoned);
        task12.zweid.stroke(stoned);
    }
})(task12 || (task12 = {}));
//# sourceMappingURL=main.js.map