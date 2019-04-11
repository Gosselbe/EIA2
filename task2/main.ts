/*
Aufgabe: task2 Maumau
Name: Bente Gossel
Matrikel: 260304
Datum: 07.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Bearbeitung in Zusammenarbeit mit Sina Haas und Julian Schubert
*/


let KE: number

function kartenAusgeben(): number {
    let KartenEingeben: string = prompt("Handkarten Anzahl Eingeben bitte");

    KE = Number(KartenEingeben); //string to number

    return KE; //Rückgabewert

}

kartenAusgeben();

//kartenAusgeben();


let kartenart: string[] = ["Herz", "Pik", "Kreuz", "Karo"];
let kartennummer: string[] = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];

let kartenvariante0: string
let kartenvariante1: string
let kartenvariante2: string
let kartenvariante3: string

let kartenstapel: string[] = [];

function alleKarten() {
    let i: number
    for (i = 0; i <= kartennummer.length - 1; i++) {
        kartenvariante0 = kartenart[0] + kartennummer[i];
        kartenvariante1 = kartenart[1] + kartennummer[i];
        kartenvariante2 = kartenart[2] + kartennummer[i];
        kartenvariante3 = kartenart[3] + kartennummer[i];

        kartenstapel.push(kartenvariante0, kartenvariante1, kartenvariante2, kartenvariante3);
    }

}

alleKarten();

let handkarten: string[] = [];


/*function kartenSort() { //Karten sortieren funktion
    if (document.getElementById("button").clicked == true)
        handkarten.sort();
}

handkarten.sort()*/


let x: number

function zufaelligeKarte() {
    for (let y = 0; y < KE; y++) {
        x = Math.floor((Math.random() * kartenstapel.length));

        let prodElement = document.createElement('div');

        document.getElementById("Handkarten").appendChild(prodElement);

        handkarten.push(kartenstapel[x]);
        let karte: string = `<p class="${handkarten[y]}">${handkarten[y]}</p>`

        prodElement.innerHTML = karte;

        kartenstapel.splice(x, 1)
    }
}

zufaelligeKarte();




