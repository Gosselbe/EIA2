/*
Aufgabe: task2 Maumau
Name: Bente Gossel
Matrikel: 260304
Datum: 07.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Bearbeitung in Zusammenarbeit mit Sina Haas und Julian Schubert
*/
let KE;
function kartenAusgeben() {
    let KartenEingeben = prompt("Handkarten Anzahl Eingeben bitte");
    KE = Number(KartenEingeben); //string to number
    return KE; //Rückgabewert
}
kartenAusgeben();
//kartenAusgeben();
let kartenart = ["Herz", "Pik", "Kreuz", "Karo"];
let kartennummer = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];
let kartenvariante0;
let kartenvariante1;
let kartenvariante2;
let kartenvariante3;
let kartenstapel = [];
function alleKarten() {
    let i;
    for (i = 0; i <= kartennummer.length - 1; i++) {
        kartenvariante0 = kartenart[0] + kartennummer[i];
        kartenvariante1 = kartenart[1] + kartennummer[i];
        kartenvariante2 = kartenart[2] + kartennummer[i];
        kartenvariante3 = kartenart[3] + kartennummer[i];
        kartenstapel.push(kartenvariante0, kartenvariante1, kartenvariante2, kartenvariante3);
    }
}
alleKarten();
let handkarten = [];
document.getElementById("button").addEventListener("click", handkartenSortieren); //Eventlistener 
function handkartenSortieren() {
    handkarten.sort();
}
let x;
function zufaelligeKarte() {
    for (let y = 0; y < KE; y++) {
        x = Math.floor((Math.random() * kartenstapel.length));
        let prodElement = document.createElement('div');
        document.getElementById("Handkarten").appendChild(prodElement);
        handkarten.push(kartenstapel[x]);
        let karte = `<p class="${handkarten[y]}">${handkarten[y]}</p>`;
        prodElement.innerHTML = karte;
        kartenstapel.splice(x, 1);
    }
}
zufaelligeKarte();
let nachziehstapel = [];
console.log(handkarten);
//# sourceMappingURL=main.js.map