namespace task3 {
    /*
    Aufgabe: task2 Maumau
    Name: Bente Gossel
    Matrikel: 260304
    Datum: 07.04.2019
    	
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Bearbeitung in Zusammenarbeit mit Sina Haas und Julian Schubert
    */

    interface Karte {
        kartenart: string;
        kartennummer: string;
        hochzaehlen: number;
    }

    let karte1: Karte = {
        kartenart: "Herz",
        kartennummer: "7",
        hochzaehlen: 1,
    }

    let karte2: Karte = {
        kartenart: "Herz",
        kartennummer: "8",
        hochzaehlen: 2,
    }

    let karte3: Karte = {
        kartenart: "Herz",
        kartennummer: "9",
        hochzaehlen: 3,
    }

    let karte4: Karte = {
        kartenart: "Herz",
        kartennummer: "10",
        hochzaehlen: 4,
    }

    let karte5: Karte = {
        kartenart: "Herz",
        kartennummer: "Bube",
        hochzaehlen: 5,
    }

    let karte6: Karte = {
        kartenart: "Herz",
        kartennummer: "Dame",
        hochzaehlen: 6,
    }

    let karte7: Karte = {
        kartenart: "Herz",
        kartennummer: "König",
        hochzaehlen: 7,
    }

    let karte8: Karte = {
        kartenart: "Herz",
        kartennummer: "Ass",
        hochzaehlen: 8,
    }

    let karte9: Karte = {
        kartenart: "Pik",
        kartennummer: "7",
        hochzaehlen: 9,
    }

    let karte10: Karte = {
        kartenart: "Pik",
        kartennummer: "8",
        hochzaehlen: 10,
    }

    let karte11: Karte = {
        kartenart: "Pik",
        kartennummer: "9",
        hochzaehlen: 11,
    }

    let karte12: Karte = {
        kartenart: "Pik",
        kartennummer: "10",
        hochzaehlen: 12,
    }

    let karte13: Karte = {
        kartenart: "Pik",
        kartennummer: "Bube",
        hochzaehlen: 13,
    }

    let karte14: Karte = {
        kartenart: "Pik",
        kartennummer: "Dame",
        hochzaehlen: 14,
    }

    let karte15: Karte = {
        kartenart: "Pik",
        kartennummer: "König",
        hochzaehlen: 15,
    }

    let karte16: Karte = {
        kartenart: "Pik",
        kartennummer: "Ass",
        hochzaehlen: 16,
    }

    let karte17: Karte = {
        kartenart: "Kreuz",
        kartennummer: "7",
        hochzaehlen: 17,
    }

    let karte18: Karte = {
        kartenart: "Kreuz",
        kartennummer: "8",
        hochzaehlen: 18,
    }

    let karte19: Karte = {
        kartenart: "Kreuz",
        kartennummer: "9",
        hochzaehlen: 19,
    }

    let karte20: Karte = {
        kartenart: "Kreuz",
        kartennummer: "10",
        hochzaehlen: 20,
    }

    let karte21: Karte = {
        kartenart: "Kreuz",
        kartennummer: "Bube",
        hochzaehlen: 21,
    }

    let karte22: Karte = {
        kartenart: "Kreuz",
        kartennummer: "Dame",
        hochzaehlen: 22,
    }

    let karte23: Karte = {
        kartenart: "Kreuz",
        kartennummer: "König",
        hochzaehlen: 23,
    }

    let karte24: Karte = {
        kartenart: "Kreuz",
        kartennummer: "Ass",
        hochzaehlen: 24,
    }

    let karte25: Karte = {
        kartenart: "Karo",
        kartennummer: "7",
        hochzaehlen: 25,
    }

    let karte26: Karte = {
        kartenart: "Karo",
        kartennummer: "8",
        hochzaehlen: 26,
    }

    let karte27: Karte = {
        kartenart: "Karo",
        kartennummer: "9",
        hochzaehlen: 27,
    }

    let karte28: Karte = {
        kartenart: "Karo",
        kartennummer: "10",
        hochzaehlen: 28,
    }

    let karte29: Karte = {
        kartenart: "Karo",
        kartennummer: "Bube",
        hochzaehlen: 29,
    }

    let karte30: Karte = {
        kartenart: "Karo",
        kartennummer: "Dame",
        hochzaehlen: 30,
    }

    let karte31: Karte = {
        kartenart: "Karo",
        kartennummer: "König",
        hochzaehlen: 31,
    }

    let karte32: Karte = {
        kartenart: "Karo",
        kartennummer: "Ass",
        hochzaehlen: 32,
    }

    let KE: number

    function kartenAusgeben(): number {
        let KartenEingeben: string = prompt("Handkarten Anzahl Eingeben bitte");

        KE = Number(KartenEingeben); //string to number

        return KE; //Rückgabewert

    }

    kartenAusgeben();

    //kartenAusgeben();


    /*let kartenart: string[] = ["Herz", "Pik", "Kreuz", "Karo"];
    let kartennummer: string[] = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];
    
    let kartenvariante0: string
    let kartenvariante1: string
    let kartenvariante2: string
    let kartenvariante3: string
    
    let kartenstapel: string[] = [];
    
    function alleKarten(): void {
        let i: number
        for (i = 0; i <= kartennummer.length - 1; i++) {
            kartenvariante0 = kartenart[0] + kartennummer[i];
            kartenvariante1 = kartenart[1] + kartennummer[i];
            kartenvariante2 = kartenart[2] + kartennummer[i];
            kartenvariante3 = kartenart[3] + kartennummer[i];
    
            kartenstapel.push(kartenvariante0, kartenvariante1, kartenvariante2, kartenvariante3);
        }
    
    }
    
    alleKarten();*/

    let kartenstapel: Karte[] = [karte1, karte2, karte3, karte4, karte5, karte6, karte7, karte8, karte9, karte10, karte11, karte12, karte13, karte14,
        karte15, karte16, karte17, karte18, karte19, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27,
        karte28, karte29, karte30, karte31, karte32]

    let handkarten: Karte[] = [];


    function writeHTML(_y: number) {
        
        let prodElement = document.createElement('div')

        document.getElementById("Handkarten").appendChild(prodElement);


        let neuekarte: string = `<p class="${handkarten[_y].kartenart}">${handkarten[_y].kartenart}${handkarten[_y].kartennummer}</p>`

        prodElement.innerHTML = neuekarte;
    }

    function writeHTML2(_x: number) {

        let prodElement = document.createElement('div')

        document.getElementById("Handkarten").appendChild(prodElement);


        let neuekarte: string = `<p class="${kartenstapel[_x].kartenart}">${kartenstapel[_x].kartenart}${kartenstapel[_x].kartennummer}</p>`

        prodElement.innerHTML = neuekarte;

    }

    function vergleich(u: Karte, v: Karte): number { //Kartenarten vergleichen um sie im Array eins hoch oder runter zu sortieren
        let kartenart1: string = u.kartenart;
        let kartenart2: string = v.kartenart;

        if (kartenart1 > kartenart2) {
            return 1
        };


        if (kartenart1 < kartenart2) {
            return -1;
        };

        return 0;

    }

    console.log(handkarten)

    let x: number;

    function zufaelligeKarte() {
        for (let y = 0; y < KE; y++) {
            x = Math.floor((Math.random() * kartenstapel.length));


            handkarten.push(kartenstapel[x]);

            writeHTML(y);

            kartenstapel.splice(x, 1)
        }
    }

    zufaelligeKarte();

    document.getElementById("button").addEventListener("click", handkartenSortieren); //Eventlistener für Kartensortierens
    function handkartenSortieren(): void {

        handkarten.sort(vergleich);
        document.getElementById("Handkarten").innerHTML = "";
        for (let s: number; s < handkarten.length; s++) {

            writeHTML(s);
        }
    }

    document.getElementById("Nachziehstapel").addEventListener("click", kartenAufnehmen);

    function kartenAufnehmen() {
        let x: number = Math.floor((Math.random() * kartenstapel.length));

        handkarten.push(kartenstapel[x]);

        writeHTML2(x);

        kartenstapel.splice(x, 1);

    }

    //let ablagestapel: string[] = [];

    //handkartenAblegen()






}

