var endabgabe;
(function (endabgabe) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", moveMain);
    let fps = 30;
    let FishArray = [];
    let imageData;
    let stopCanvas;
    function init() {
        alert("Spieleanleitung: Hallo Spieler. Mit den Pfeiltasten kannst du den kleinen grünen Fisch durch die Unterwasserwelt steuern. Fresse kleine Fische und Luftblasen. Aber pass auf! Alle Fische die größer sind als du können dich fressen. Und nimm dich vor dem orangenen Fisch in acht, ihn kannst du nicht besiegen. Viel Erfolg und guten Appetit!");
        endabgabe.canvas = document.getElementsByTagName("canvas")[0];
        endabgabe.zweid = endabgabe.canvas.getContext("2d");
        water();
        sand();
        crab(20, 4);
        endabgabe.refresh();
        for (let k = 0; k < 20; k++) {
            let x = Math.random() * endabgabe.canvas.width;
            let y = Math.random() * endabgabe.canvas.height + 300;
            plant(x, y);
        }
        for (let n = 0; n < 20; n++) {
            let x = Math.random() * endabgabe.canvas.width;
            let y = Math.random() * endabgabe.canvas.height + 300;
            plant1(x, y);
        }
        for (let t = 0; t < 50; t++) {
            let x = Math.random() * endabgabe.canvas.width;
            let y = Math.random() * endabgabe.canvas.height + 300;
            stone(x, y);
        }
        imageData = endabgabe.zweid.getImageData(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * endabgabe.canvas.width;
            let y = Math.random() * endabgabe.canvas.height - 300;
        }
        for (let i = 0; i < 11; i++) { //Schleife für kleine Fische
            let fish1 = new endabgabe.FischClass(Math.random(), Math.random());
            FishArray.push(fish1);
        }
        for (let i = 0; i < 2; i++) { //Schleife für große Fische
            let fish2 = new endabgabe.FischClass1(Math.random());
            FishArray.push(fish2);
        }
        for (let i = 0; i < 2; i++) { //Schleife für super große Fische
            let fish3 = new endabgabe.FischClass2(Math.random());
            FishArray.push(fish3);
        }
        for (let i = 0; i < 1; i++) { //Schleife für giganto große Fische
            let fish4 = new endabgabe.FischClass3(Math.random());
            FishArray.push(fish4);
        }
        for (let i = 0; i < 10; i++) { //Schleife für große Bubbles
            let bubble = new endabgabe.BubbleClass(Math.random(), Math.random());
            FishArray.push(bubble);
        }
        for (let i = 0; i < 19; i++) { //schleife für kleine Bubbles
            let bubble1 = new endabgabe.BubbleClass1(Math.random(), Math.random());
            FishArray.push(bubble1);
        }
        endabgabe.mainfish = new endabgabe.MainFish(400, 300); //Mainfisch pushen
        FishArray.push(endabgabe.mainfish);
        update();
    }
    function update() {
        zeitFestlegen();
        endabgabe.zweid.clearRect(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        endabgabe.zweid.putImageData(imageData, 0, 0);
        eat();
        for (let i = 0; i < FishArray.length; i++) {
            FishArray[i].update();
        }
    }
    function moveMain(_event) {
        if (_event.keyCode == 39) { //rechts
            endabgabe.mainfish.x += 5;
            if (endabgabe.mainfish.x > endabgabe.canvas.width) {
                endabgabe.mainfish.x = 0;
            }
        }
        if (_event.keyCode == 37) { //links
            endabgabe.mainfish.x -= 5;
            if (endabgabe.mainfish.x < 0) {
                endabgabe.mainfish.x = endabgabe.canvas.width;
            }
        }
        if (_event.keyCode == 40) { //unten
            endabgabe.mainfish.y += 5;
            if (endabgabe.mainfish.y > endabgabe.canvas.height) {
                endabgabe.mainfish.y = 0;
            }
        }
        if (_event.keyCode == 38) { //oben
            endabgabe.mainfish.y -= 5;
            if (endabgabe.mainfish.y < 0) {
                endabgabe.mainfish.y = endabgabe.canvas.height;
            }
        }
    }
    endabgabe.highscore = 0;
    function eat() {
        for (let i = 0; i < FishArray.length; i++) {
            let abstandx = FishArray[i].x - endabgabe.mainfish.x;
            let abstandy = FishArray[i].y - endabgabe.mainfish.y;
            let abstand = Math.sqrt(Math.pow(abstandx, 2) + Math.pow(abstandy, 2)); //Abstand berechnen
            if (FishArray[i].type == 3 && FishArray[i] != endabgabe.mainfish && abstand < 35 && endabgabe.mainfish.size > 5) { //Fressen von kleinen Fischen
                endabgabe.mainfish.size += 2;
                endabgabe.mainfish.eyeSize += 1.5;
                endabgabe.mainfish.dotSize += 1;
                FishArray.splice(i, 1);
                console.log("wachse");
                endabgabe.highscore += 10;
                endabgabe.mainfish.flo2x += 2;
                endabgabe.mainfish.flo3x += 2;
                endabgabe.mainfish.flo2y += 2;
                endabgabe.mainfish.flo3y += 2;
                let fish1 = new endabgabe.FischClass(Math.random(), Math.random()); //neuer kleiner Fisch 
                FishArray.push(fish1);
            }
            else if (FishArray[i].type == 1 && FishArray[i] != endabgabe.mainfish && abstand < 35 && endabgabe.mainfish.size > 20) { //Fressen von großen Bubbles
                endabgabe.mainfish.size += 1;
                endabgabe.mainfish.eyeSize += 1;
                endabgabe.mainfish.dotSize += 0.5;
                FishArray.splice(i, 1);
                console.log("wachseBubble");
                endabgabe.highscore += 3;
                endabgabe.mainfish.flo2x += 1;
                endabgabe.mainfish.flo3x += 1;
                endabgabe.mainfish.flo2y += 1;
                endabgabe.mainfish.flo3y += 1;
                let bubble = new endabgabe.BubbleClass(Math.random(), Math.random()); //neue große Bubble
                FishArray.push(bubble);
            }
            else if (FishArray[i].type == 2 && FishArray[i] != endabgabe.mainfish && abstand < 35 && endabgabe.mainfish.size > 10) { //Fressen von kleinen Bubbles
                endabgabe.mainfish.size += 1;
                endabgabe.mainfish.eyeSize += 1;
                endabgabe.mainfish.dotSize += 0.5;
                FishArray.splice(i, 1);
                console.log("wachseBubbleKlein");
                endabgabe.highscore += 3;
                endabgabe.mainfish.flo2x += 1;
                endabgabe.mainfish.flo3x += 1;
                endabgabe.mainfish.flo2y += 1;
                endabgabe.mainfish.flo3y += 1;
                let bubble1 = new endabgabe.BubbleClass1(Math.random(), Math.random()); //neue kleine Bubble
                FishArray.push(bubble1);
            }
            else if (FishArray[i].type == 4 && FishArray[i] != endabgabe.mainfish && abstand < 35 && endabgabe.mainfish.size > 60) { //Fressen von großen Fischen
                endabgabe.mainfish.size += 4;
                endabgabe.mainfish.eyeSize += 1;
                endabgabe.mainfish.dotSize += 0.5;
                FishArray.splice(i, 1);
                console.log("wachseBubbleKlein");
                endabgabe.highscore += 15;
                endabgabe.mainfish.flo2x += 4;
                endabgabe.mainfish.flo3x += 4;
                endabgabe.mainfish.flo2y += 4;
                endabgabe.mainfish.flo3y += 4;
                let fish2 = new endabgabe.FischClass1(Math.random()); //neuer großer Fisch
                FishArray.push(fish2);
            }
            else if (FishArray[i].type == 5 && FishArray[i] != endabgabe.mainfish && abstand < 35 && endabgabe.mainfish.size > 90) { //Fressen von super großen Fischen
                endabgabe.mainfish.size += 1;
                endabgabe.mainfish.eyeSize += 1;
                endabgabe.mainfish.dotSize += 0.5;
                FishArray.splice(i, 1);
                console.log("wachseBubbleKlein");
                endabgabe.highscore += 20;
                endabgabe.mainfish.flo2x += 1;
                endabgabe.mainfish.flo3x += 1;
                endabgabe.mainfish.flo2y += 1;
                endabgabe.mainfish.flo3y += 1;
                let fish3 = new endabgabe.FischClass2(Math.random()); //neuer super großer Fisch
                FishArray.push(fish3);
            }
            else if (FishArray[i].type == 4 && abstand < 50 && endabgabe.mainfish.size < 60 && FishArray[i].type != 3) { //Game over bei großem Fisch
                alert("GAME OVER!");
                console.log("stirb");
                ichSterbe();
            }
            else if (FishArray[i].type == 5 && abstand < 50 && endabgabe.mainfish.size < 90 && FishArray[i].type != 3) { //Game over bei super großem Fisch
                alert("GAME OVER!");
                console.log("stirbSuperFisch");
                ichSterbe();
            }
            else if (FishArray[i].type == 6 && abstand < 170 && endabgabe.mainfish.size < 900 && FishArray[i].type != 3) { //Game over bei giganto großem Fisch
                alert("GAME OVER!");
                console.log("stirbGigantoFisch");
                ichSterbe();
            }
            document.getElementById("Zahl").innerHTML = ""; //Highscore erstellen
            let prodElement = document.createElement("div");
            document.getElementById("Zahl").appendChild(prodElement);
            prodElement.innerHTML = endabgabe.highscore.toString();
        }
    }
    function zeitFestlegen() {
        stopCanvas = window.setTimeout(update, 1000 / fps);
    }
    function ichSterbe() {
        window.clearTimeout(stopCanvas);
        endabgabe.enterName = prompt("Dein Highscore ist" + " " + endabgabe.highscore + ". " + "Gib deinen Namen ein!");
        endabgabe.insert();
    }
    endabgabe.ichSterbe = ichSterbe;
    function water() {
        let wat = new Path2D();
        wat.rect(0, 0, 1200, 500);
        endabgabe.zweid.fillStyle = "LightSkyBlue";
        endabgabe.zweid.fill(wat);
        endabgabe.zweid.stroke(wat);
    }
    function sand() {
        let san = new Path2D();
        san.rect(0, 500, 1200, 300);
        endabgabe.zweid.fillStyle = "Bisque";
        endabgabe.zweid.fill(san);
        endabgabe.zweid.stroke(san);
    }
    function crab(x, y) {
        let body = new Path2D();
        body.rect(x + 50, y + 500, 90, 50);
        endabgabe.zweid.fillStyle = "Red";
        endabgabe.zweid.fill(body);
        endabgabe.zweid.stroke(body);
        let leg1 = new Path2D();
        leg1.moveTo(x + 30, y + 500);
        leg1.lineTo(x + 50, y + 510);
        endabgabe.zweid.fill(leg1);
        endabgabe.zweid.stroke(leg1);
        let leg11 = new Path2D();
        leg11.moveTo(x + 30, y + 500);
        leg11.lineTo(x + 20, y + 505);
        endabgabe.zweid.fill(leg11);
        endabgabe.zweid.stroke(leg11);
        let leg2 = new Path2D();
        leg2.moveTo(x + 30, y + 515);
        leg2.lineTo(x + 50, y + 525);
        endabgabe.zweid.fill(leg2);
        endabgabe.zweid.stroke(leg2);
        let leg22 = new Path2D();
        leg22.moveTo(x + 30, y + 515);
        leg22.lineTo(x + 20, y + 520);
        endabgabe.zweid.fill(leg22);
        endabgabe.zweid.stroke(leg22);
        let leg3 = new Path2D();
        leg3.moveTo(x + 30, y + 530);
        leg3.lineTo(x + 50, y + 540);
        endabgabe.zweid.fill(leg3);
        endabgabe.zweid.stroke(leg3);
        let leg33 = new Path2D();
        leg33.moveTo(x + 30, y + 530);
        leg33.lineTo(x + 20, y + 535);
        endabgabe.zweid.fill(leg33);
        endabgabe.zweid.stroke(leg33);
        let leg4 = new Path2D();
        leg4.moveTo(x + 140, y + 510);
        leg4.lineTo(x + 160, y + 500);
        endabgabe.zweid.fill(leg4);
        endabgabe.zweid.stroke(leg4);
        let leg44 = new Path2D();
        leg44.moveTo(x + 170, y + 505);
        leg44.lineTo(x + 160, y + 500);
        endabgabe.zweid.fill(leg44);
        endabgabe.zweid.stroke(leg44);
        let leg5 = new Path2D();
        leg5.moveTo(x + 140, y + 525);
        leg5.lineTo(x + 160, y + 515);
        endabgabe.zweid.fill(leg5);
        endabgabe.zweid.stroke(leg5);
        let leg55 = new Path2D();
        leg55.moveTo(x + 170, y + 520);
        leg55.lineTo(x + 160, y + 515);
        endabgabe.zweid.fill(leg55);
        endabgabe.zweid.stroke(leg55);
        let leg6 = new Path2D();
        leg6.moveTo(x + 140, y + 540);
        leg6.lineTo(x + 160, y + 530);
        endabgabe.zweid.fill(leg6);
        endabgabe.zweid.stroke(leg6);
        let leg66 = new Path2D();
        leg66.moveTo(x + 170, y + 535);
        leg66.lineTo(x + 160, y + 530);
        endabgabe.zweid.fill(leg66);
        endabgabe.zweid.stroke(leg66);
        let eye1 = new Path2D();
        eye1.arc(x + 80, y + 520, 10, 0, 2 * Math.PI);
        endabgabe.zweid.fillStyle = "White";
        endabgabe.zweid.fill(eye1);
        endabgabe.zweid.stroke(eye1);
        let eye2 = new Path2D();
        eye2.arc(x + 110, y + 520, 10, 0, 2 * Math.PI);
        endabgabe.zweid.fillStyle = "White";
        endabgabe.zweid.fill(eye2);
        endabgabe.zweid.stroke(eye2);
        let dot1 = new Path2D();
        dot1.arc(x + 83, y + 520, 5, 0, 2 * Math.PI);
        endabgabe.zweid.fillStyle = "Black";
        endabgabe.zweid.fill(dot1);
        endabgabe.zweid.stroke(dot1);
        let dot2 = new Path2D();
        dot2.arc(x + 113, y + 520, 5, 0, 2 * Math.PI);
        endabgabe.zweid.fillStyle = "Black";
        endabgabe.zweid.fill(dot2);
        endabgabe.zweid.stroke(dot2);
        let mouth = new Path2D();
        mouth.moveTo(x + 90, y + 540);
        mouth.lineTo(x + 100, y + 540);
        endabgabe.zweid.fill(mouth);
        endabgabe.zweid.stroke(mouth);
    }
    function plant(x, y) {
        let plant1 = new Path2D();
        plant1.moveTo(x + 210, y + 50);
        plant1.lineTo(x + 205, y + 200);
        plant1.lineTo(x + 220, y + 200);
        plant1.closePath();
        endabgabe.zweid.fillStyle = "ForestGreen";
        endabgabe.zweid.fill(plant1);
        endabgabe.zweid.stroke(plant1);
    }
    function plant1(x, y) {
        let plant1 = new Path2D();
        plant1.moveTo(x + 210, y + 100);
        plant1.lineTo(x + 205, y + 200);
        plant1.lineTo(x + 220, y + 200);
        plant1.closePath();
        endabgabe.zweid.fillStyle = "DarkSeaGreen";
        endabgabe.zweid.fill(plant1);
        endabgabe.zweid.stroke(plant1);
    }
    function stone(x, y) {
        let stoned = new Path2D();
        stoned.arc(x + 113, y + 300, 7, 0, 2 * Math.PI);
        endabgabe.zweid.fillStyle = "Sienna";
        endabgabe.zweid.fill(stoned);
        endabgabe.zweid.stroke(stoned);
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=main.js.map