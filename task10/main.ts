
namespace task10 {

    document.addEventListener("DOMContentLoaded", init);
    let canvas: HTMLCanvasElement;
    let zweid: CanvasRenderingContext2D;


    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        zweid = canvas.getContext("2d");
        water();
        sand();
        fish(400, 400);
        fishu(30, 400);
        crab(20, 4);
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height-300;
            bubbles(x, y);
            bubbles1(x, y)
        }

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
            stone(x, y)}
        }
    

        function bubbles(_x: number, _y: number): void {
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
        }


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

        function fish(x: number, y: number): void {
            let fishi: Path2D = new Path2D();
            fishi.arc(x, y - 200, 50, 0, 2 * Math.PI);
            zweid.fillStyle = "Pink";
            zweid.fill(fishi);
            zweid.stroke(fishi);

            let flo: Path2D = new Path2D();
            flo.moveTo(x + 48, y - 200);
            flo.lineTo(x + 90, y - 170);
            flo.lineTo(x + 90, y - 230)
            flo.closePath();
            zweid.fillStyle = "Pink";
            zweid.fill(flo);
            zweid.stroke(flo);

            let eye1: Path2D = new Path2D();
            eye1.arc(x - 30, y - 190, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "White";
            zweid.fill(eye1);
            zweid.stroke(eye1);

            let dot1: Path2D = new Path2D();
            dot1.arc(x - 33, y - 190, 5, 0, 2 * Math.PI);
            zweid.fillStyle = "Black";
            zweid.fill(dot1);
            zweid.stroke(dot1);

            let brow: Path2D = new Path2D();
            brow.moveTo(x - 33, y - 210);
            brow.lineTo(x - 20, y - 205);
            zweid.fill(brow);
            zweid.stroke(brow);
        }

        function fishu(x: number, y: number): void {

            let fishi: Path2D = new Path2D();
            fishi.arc(x + 800, y - 4, 60, 0, 2 * Math.PI);
            zweid.fillStyle = "Plum";
            zweid.fill(fishi);
            zweid.stroke(fishi);

            let flo: Path2D = new Path2D();
            flo.moveTo(x + 690, y - 40);
            flo.lineTo(x + 690, y + 30);
            flo.lineTo(x + 739, y - 4)
            flo.closePath();
            zweid.fillStyle = "Plum";
            zweid.fill(flo);
            zweid.stroke(flo);

            let eye1: Path2D = new Path2D();
            eye1.arc(x +830, y - 4, 10, 0, 2 * Math.PI);
            zweid.fillStyle = "White";
            zweid.fill(eye1);
            zweid.stroke(eye1);

            let dot1: Path2D = new Path2D();
            dot1.arc(x +834, y - 4, 5, 0, 2 * Math.PI);
            zweid.fillStyle = "Black";
            zweid.fill(dot1);
            zweid.stroke(dot1);

            let brow: Path2D = new Path2D();
            brow.moveTo(x + 839, y - 15);
            brow.lineTo(x + 820, y - 20);
            zweid.fill(brow);
            zweid.stroke(brow);

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

        function plant(x: number, y: number):void {

            let plant1: Path2D = new Path2D();
            plant1.moveTo(x + 210, y + 50);
            plant1.lineTo(x + 205, y + 200);
            plant1.lineTo(x + 220, y + 200)
            plant1.closePath();
            zweid.fillStyle = "ForestGreen";
            zweid.fill(plant1);
            zweid.stroke(plant1);
        }

        function plant1(x: number, y: number):void {

            let plant1: Path2D = new Path2D();
            plant1.moveTo(x + 210, y + 100);
            plant1.lineTo(x + 205, y + 200);
            plant1.lineTo(x + 220, y + 200)
            plant1.closePath();
            zweid.fillStyle = "DarkSeaGreen";
            zweid.fill(plant1);
            zweid.stroke(plant1);
        }

        function stone(x:number, y:number):void{

            let stoned: Path2D =new Path2D();
            stoned.arc(x + 113, y + 300, 7, 0, 2 * Math.PI);
            zweid.fillStyle = "Sienna";
            zweid.fill(stoned);
            zweid.stroke(stoned);
        } 
    }  