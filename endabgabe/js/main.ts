namespace endabgabe {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", moveMain);
    export let zweid: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let fps: number = 30;
    let FishArray: Alles[] = [];
    let imageData: ImageData;
    export let mainfish: MainFish;
    let stopCanvas: number;
    export let enterName: string;

    function init() {
        alert("Spieleanleitung: Hallo Spieler. Mit den Pfeiltasten kannst du den kleinen grünen Fisch durch die Unterwasserwelt steuern. Fresse kleine Fische und Luftblasen. Aber pass auf! Alle Fische die größer sind als du können dich fressen. Und nimm dich vor dem orangenen Fisch in acht, ihn kannst du nicht besiegen. Viel Erfolg und guten Appetit!");
        canvas = document.getElementsByTagName("canvas")[0];
        zweid = canvas.getContext("2d");
        water();
        sand();
        crab(20, 4);
        refresh();

        for (let k: number = 0; k < 50; k++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height + 300;
            plant(x, y)
        }

        for (let n: number = 0; n < 50; n++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height + 300;
            plant1(x, y)

        }

        for (let t: number = 0; t < 50; t++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height + 300;
            stone(x, y)
        }

        imageData = zweid.getImageData(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height - 300;
        }

        for (let i: number = 0; i < 11; i++) { //Schleife für kleine Fische
            let fish1: FischClass = new FischClass(Math.random(), Math.random());
            FishArray.push(fish1);
        }
        for (let i: number = 0; i < 2; i++) { //Schleife für große Fische
            let fish2: FischClass1 = new FischClass1(Math.random());
            FishArray.push(fish2);
        }
        for (let i: number = 0; i < 2; i++) { //Schleife für super große Fische
            let fish3: FischClass2 = new FischClass2(Math.random());
            FishArray.push(fish3);
        }
        for (let i: number = 0; i < 1; i++) { //Schleife für giganto große Fische
            let fish4: FischClass3 = new FischClass3( Math.random());
            FishArray.push(fish4);
        }
        for (let i: number = 0; i < 10; i++) { //Schleife für große Bubbles
            let bubble: BubbleClass = new BubbleClass(Math.random(), Math.random());
            FishArray.push(bubble);
        }

        for (let i: number = 0; i < 19; i++) { //schleife für kleine Bubbles
            let bubble1: BubbleClass1 = new BubbleClass1(Math.random(), Math.random());
            FishArray.push(bubble1);
        }
        mainfish = new MainFish(400, 300); //Mainfisch pushen
        FishArray.push(mainfish);

        update()
    }

    function update(): void {
        zeitFestlegen();
        zweid.clearRect(0, 0, canvas.width, canvas.height);
        zweid.putImageData(imageData, 0, 0);
        eat();


        for (let i: number = 0; i < FishArray.length; i++) {
            FishArray[i].update();
        }

    }

    function moveMain(_event: KeyboardEvent) { //Steuerung MainFish
        if (_event.keyCode == 39) {//rechts
            mainfish.x += 5;
            if (mainfish.x > canvas.width) {
                mainfish.x = 0;
            }
        }
        if (_event.keyCode == 37) {//links
            mainfish.x -= 5;
            if (mainfish.x < 0) {
                mainfish.x = canvas.width;
            }
        }
        if (_event.keyCode == 40) {//unten
            mainfish.y += 5;
            if (mainfish.y > canvas.height) {
                mainfish.y = 0;
            }
        }
        if (_event.keyCode == 38) {//oben
            mainfish.y -= 5;
            if (mainfish.y < 0) {
                mainfish.y = canvas.height;
            }
        }
    }
    export let highscore: number = 0;
    function eat(): void {
        for (let i: number = 0; i < FishArray.length; i++) {
            let abstandx = FishArray[i].x - mainfish.x;
            let abstandy = FishArray[i].y - mainfish.y;


            let abstand: number = Math.sqrt(Math.pow(abstandx, 2) + Math.pow(abstandy, 2)); //Abstand berechnen

            if (FishArray[i].type == 3 && FishArray[i] != mainfish && abstand < 35 && mainfish.size > 5) { //Fressen von kleinen Fischen
                mainfish.size += 2;
                mainfish.eyeSize += 1.5;
                mainfish.dotSize += 1;
                FishArray.splice(i, 1);
                console.log("wachse");
                highscore += 10;
                mainfish.flo2x += 2;
                mainfish.flo3x += 2;
                mainfish.flo2y += 2;
                mainfish.flo3y += 2;

                let fish1: FischClass = new FischClass(Math.random(), Math.random()); //neuer kleiner Fisch 
                FishArray.push(fish1);

            }
            else if (FishArray[i].type == 1 && FishArray[i] != mainfish && abstand < 35 && mainfish.size > 20) { //Fressen von großen Bubbles
                mainfish.size += 1;
                mainfish.eyeSize += 1;
                mainfish.dotSize += 0.5;
                FishArray.splice(i, 1);
                console.log("wachseBubble");
                highscore += 3;
                mainfish.flo2x += 1;
                mainfish.flo3x += 1;
                mainfish.flo2y += 1;
                mainfish.flo3y += 1;

                let bubble: BubbleClass = new BubbleClass(Math.random(), Math.random()); //neue große Bubble
                FishArray.push(bubble);
            }
            else if (FishArray[i].type == 2 && FishArray[i] != mainfish && abstand < 35 && mainfish.size > 10) { //Fressen von kleinen Bubbles
                mainfish.size += 1;
                mainfish.eyeSize += 1;
                mainfish.dotSize += 0.5;
                FishArray.splice(i, 1);
                console.log("wachseBubbleKlein");
                highscore += 3;
                mainfish.flo2x += 1;
                mainfish.flo3x += 1;
                mainfish.flo2y += 1;
                mainfish.flo3y += 1;

                let bubble1: BubbleClass1 = new BubbleClass1(Math.random(), Math.random()); //neue kleine Bubble
                FishArray.push(bubble1);
            }
            else if (FishArray[i].type == 4 && FishArray[i] != mainfish && abstand < 35 && mainfish.size > 60) { //Fressen von großen Fischen
                mainfish.size += 4;
                mainfish.eyeSize += 1;
                mainfish.dotSize += 0.5;
                FishArray.splice(i, 1);
                console.log("wachseBubbleKlein");
                highscore += 15;
                mainfish.flo2x += 4;
                mainfish.flo3x += 4;
                mainfish.flo2y += 4;
                mainfish.flo3y += 4;

                let fish2: FischClass1 = new FischClass1(Math.random()); //neuer großer Fisch
                FishArray.push(fish2);
            }
            else if (FishArray[i].type == 5 && FishArray[i] != mainfish && abstand < 35 && mainfish.size > 90) { //Fressen von super großen Fischen
                mainfish.size += 1;
                mainfish.eyeSize += 1;
                mainfish.dotSize += 0.5;
                FishArray.splice(i, 1);
                console.log("wachseBubbleKlein");
                highscore += 20;
                mainfish.flo2x += 1;
                mainfish.flo3x += 1;
                mainfish.flo2y += 1;
                mainfish.flo3y += 1;

                let fish3: FischClass2 = new FischClass2( Math.random()); //neuer super großer Fisch
                FishArray.push(fish3);
            }
            else if (FishArray[i].type == 4 && abstand < 50 && mainfish.size < 60 && FishArray[i].type != 3) { //Game over bei großem Fisch
                alert("GAME OVER!");
                console.log("stirb");
                ichSterbe();
            }
            else if (FishArray[i].type == 5 && abstand < 50 && mainfish.size < 90 && FishArray[i].type != 3) { //Game over bei super großem Fisch
                alert("GAME OVER!");
                console.log("stirbSuperFisch");
                ichSterbe();
            }
            else if (FishArray[i].type == 6 && abstand < 200 && mainfish.size < 900 && FishArray[i].type != 3) { //Game over bei giganto großem Fisch
                alert("GAME OVER!");
                console.log("stirbGigantoFisch");
                ichSterbe();
            }
            document.getElementById("Zahl").innerHTML = "";//Highscore erstellen
            let prodElement = document.createElement("div");
            document.getElementById("Zahl").appendChild(prodElement);
            prodElement.innerHTML = highscore.toString();
        }
    }

    function zeitFestlegen(): void {
        stopCanvas = window.setTimeout(update, 1000 / fps);
    }
    

    export function ichSterbe(): void {
        window.clearTimeout(stopCanvas);
        enterName=prompt("Dein Highscore ist"+ " "+ highscore +". "+"Gib deinen Namen ein!");
        insert();
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
        zweid.fillStyle = "OliveDrab";
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