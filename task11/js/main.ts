namespace task11 {

    document.addEventListener("DOMContentLoaded", init);
    export let zweid: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let fps: number = 30;
    let FishArray: FischInterface[] = [];
    let imageData: ImageData;


    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        zweid = canvas.getContext("2d");
        water();
        sand();
        crab(20, 4);

        for (let k: number = 0; k < 20; k++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height + 300;
            plant(x, y)
        }

        for (let n: number = 0; n < 20; n++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height + 300;
            plant1(x, y)

        }

        for (let t: number = 0; t < 20; t++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height + 300;
            stone(x, y)
        }

        imageData = zweid.getImageData(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height - 300;
            //bubbles(x, y);
            //bubbles1(x, y)
        }
        for (let i: number = 0; i < 8; i++) {
            let x: number = Math.random()*canvas.width;
            let y: number = Math.random()*canvas.height;
            let dx: number = -10;
            let dy: number = 0;
            let fish1: FischInterface;
            fish1 = new FischInterface();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1.dy = dy;
            FishArray.push(fish1);
            fish1.drawFish();
        }
        for (let i: number = 0; i < 8; i++) {
            let x1: number = Math.random() * canvas.width;
            let y1: number = Math.random() * canvas.height;
            let dx1: number = +5;
            let dy1: number = 0;
            let fish2: FischInterface1;
            fish2 = new FischInterface1();
            fish2.x = x1;
            fish2.y = y1;
            fish2.dx = dx1;
            fish2.dy = dy1;
            FishArray.push(fish2);
            fish2.drawFish1();
        }
        for (let i: number = 0; i < 19; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = 0;
            let dy: number = -10;
            let bubble: BubbleInterface;
            bubble = new BubbleInterface();
            bubble.x = x;
            bubble.y = y;
            bubble.dx = dx;
            bubble.dy = dy;
            FishArray.push(bubble);
            bubble.drawBubble();
        }

        for (let i: number = 0; i < 19; i++) {
            let x2: number = Math.random() * canvas.width;
            let y2: number = Math.random() * canvas.height;
            let dx2: number = 0;
            let dy2: number = -10;
            let bubble1: BubbleInterface1;
            bubble1 = new BubbleInterface1();
            bubble1.x = x2;
            bubble1.y = y2;
            bubble1.dx = dx2;
            bubble1.dy = dy2;
            FishArray.push(bubble1);
            bubble1.drawBubble1();
        }

        update()
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        zweid.clearRect(0, 0, canvas.width, canvas.height);
        zweid.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < FishArray.length; i++) {
            FishArray[i].update();
        }
    }

    /*function bubbles(_x: number, _y: number): void {
        let bub: Path2D = new Path2D();
        bub.arc(_x, _y - 0, 20, 0, 2 * Math.PI);
        zweid.fillStyle = "DodgerBlue";
        zweid.fill(bub);
        zweid.stroke(bub);
    }

    function bubbles1(_x: number, _y: number): void {

        let bub1: Path2D = new Path2D();
        bub1.arc(_x, _y - 40, 10, 0, 2 * Math.PI);
        zweid.fillStyle = "DodgerBlue";
        zweid.fill(bub1);
        zweid.stroke(bub1);
    }*/


    function water(): void {
        let wat: Path2D = new Path2D();
        wat.rect(0, 0, 1200, 500);
        zweid.fillStyle = "LightSkyBlue";
        zweid.fill(wat);
        zweid.stroke(wat);
    }

    function sand(): void {
        let san: Path2D = new Path2D();
        san.rect(0, 500, 1200, 300);
        zweid.fillStyle = "Bisque";
        zweid.fill(san);
        zweid.stroke(san);
    }

    function crab(x: number, y: number): void {
        let body: Path2D = new Path2D();
        body.rect(x + 50, y + 500, 90, 50);
        zweid.fillStyle = "Red";
        zweid.fill(body);
        zweid.stroke(body);

        let leg1: Path2D = new Path2D();
        leg1.moveTo(x + 30, y + 500);
        leg1.lineTo(x + 50, y + 510);
        zweid.fill(leg1);
        zweid.stroke(leg1);

        let leg11: Path2D = new Path2D();
        leg11.moveTo(x + 30, y + 500);
        leg11.lineTo(x + 20, y + 505);
        zweid.fill(leg11);
        zweid.stroke(leg11);

        let leg2: Path2D = new Path2D();
        leg2.moveTo(x + 30, y + 515);
        leg2.lineTo(x + 50, y + 525);
        zweid.fill(leg2);
        zweid.stroke(leg2);

        let leg22: Path2D = new Path2D();
        leg22.moveTo(x + 30, y + 515);
        leg22.lineTo(x + 20, y + 520);
        zweid.fill(leg22);
        zweid.stroke(leg22);

        let leg3: Path2D = new Path2D();
        leg3.moveTo(x + 30, y + 530);
        leg3.lineTo(x + 50, y + 540);
        zweid.fill(leg3);
        zweid.stroke(leg3);

        let leg33: Path2D = new Path2D();
        leg33.moveTo(x + 30, y + 530);
        leg33.lineTo(x + 20, y + 535);
        zweid.fill(leg33);
        zweid.stroke(leg33);

        let leg4: Path2D = new Path2D();
        leg4.moveTo(x + 140, y + 510);
        leg4.lineTo(x + 160, y + 500);
        zweid.fill(leg4);
        zweid.stroke(leg4);

        let leg44: Path2D = new Path2D();
        leg44.moveTo(x + 170, y + 505);
        leg44.lineTo(x + 160, y + 500);
        zweid.fill(leg44);
        zweid.stroke(leg44);

        let leg5: Path2D = new Path2D();
        leg5.moveTo(x + 140, y + 525);
        leg5.lineTo(x + 160, y + 515);
        zweid.fill(leg5);
        zweid.stroke(leg5);

        let leg55: Path2D = new Path2D();
        leg55.moveTo(x + 170, y + 520);
        leg55.lineTo(x + 160, y + 515);
        zweid.fill(leg55);
        zweid.stroke(leg55);

        let leg6: Path2D = new Path2D();
        leg6.moveTo(x + 140, y + 540);
        leg6.lineTo(x + 160, y + 530);
        zweid.fill(leg6);
        zweid.stroke(leg6);

        let leg66: Path2D = new Path2D();
        leg66.moveTo(x + 170, y + 535);
        leg66.lineTo(x + 160, y + 530);
        zweid.fill(leg66);
        zweid.stroke(leg66);

        let eye1: Path2D = new Path2D();
        eye1.arc(x + 80, y + 520, 10, 0, 2 * Math.PI);
        zweid.fillStyle = "White";
        zweid.fill(eye1);
        zweid.stroke(eye1);

        let eye2: Path2D = new Path2D();
        eye2.arc(x + 110, y + 520, 10, 0, 2 * Math.PI);
        zweid.fillStyle = "White";
        zweid.fill(eye2);
        zweid.stroke(eye2);

        let dot1: Path2D = new Path2D();
        dot1.arc(x + 83, y + 520, 5, 0, 2 * Math.PI);
        zweid.fillStyle = "Black";
        zweid.fill(dot1);
        zweid.stroke(dot1);

        let dot2: Path2D = new Path2D();
        dot2.arc(x + 113, y + 520, 5, 0, 2 * Math.PI);
        zweid.fillStyle = "Black";
        zweid.fill(dot2);
        zweid.stroke(dot2);

        let mouth: Path2D = new Path2D();
        mouth.moveTo(x + 90, y + 540);
        mouth.lineTo(x + 100, y + 540);
        zweid.fill(mouth);
        zweid.stroke(mouth);
    }

    function plant(x: number, y: number): void {

        let plant1: Path2D = new Path2D();
        plant1.moveTo(x + 210, y + 50);
        plant1.lineTo(x + 205, y + 200);
        plant1.lineTo(x + 220, y + 200)
        plant1.closePath();
        zweid.fillStyle = "ForestGreen";
        zweid.fill(plant1);
        zweid.stroke(plant1);
    }

    function plant1(x: number, y: number): void {

        let plant1: Path2D = new Path2D();
        plant1.moveTo(x + 210, y + 100);
        plant1.lineTo(x + 205, y + 200);
        plant1.lineTo(x + 220, y + 200)
        plant1.closePath();
        zweid.fillStyle = "DarkSeaGreen";
        zweid.fill(plant1);
        zweid.stroke(plant1);
    }

    function stone(x: number, y: number): void {

        let stoned: Path2D = new Path2D();
        stoned.arc(x + 113, y + 300, 7, 0, 2 * Math.PI);
        zweid.fillStyle = "Sienna";
        zweid.fill(stoned);
        zweid.stroke(stoned);
    }
} 