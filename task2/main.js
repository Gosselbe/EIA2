let KE;
function kartenAusgeben() {
    let KartenEingeben = prompt("Handkarten Anzahl Eingeben bitte");
    KE = Number(KartenEingeben); //string to number
    return KE; //Rückgabewert
}
kartenAusgeben();
//kartenAusgeben();
let KartenArt = ["Herz", "Pik", "Kreuz", "Karo"];
let KartenNummer = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];
let Kartenvariante0;
let Kartenvariante1;
let Kartenvariante2;
let Kartenvariante3;
let Kartenstapel = [];
function alleKarten() {
    let i;
    for (i = 0; i <= KartenNummer.length - 1; i++) {
        Kartenvariante0 = KartenArt[0] + KartenNummer[i];
        Kartenvariante1 = KartenArt[1] + KartenNummer[i];
        Kartenvariante2 = KartenArt[2] + KartenNummer[i];
        Kartenvariante3 = KartenArt[3] + KartenNummer[i];
        Kartenstapel.push(Kartenvariante0, Kartenvariante1, Kartenvariante2, Kartenvariante3);
    }
}
alleKarten();
let Handkarten = [];
/*function zufälligeKarte() {
    for (let y = KE; Handkarten.length <= y - 1;) {
        let x: number = 0;; { //x ist zufällig generierte ZAhl
            x = Math.floor((Math.random() * Kartenstapel.length));

            let prodElement = document.createElement('div');
            let kartenhand: string = `<p>${Kartenstapel[x]}</p>`

            prodElement.innerHTML = kartenhand;
            document.getElementById("Handkarten").appendChild(prodElement);

            Handkarten.push(Kartenstapel[x]);

            Kartenstapel.splice(x, 1);
        }
    }
}*/
let x;
function zufälligeKarte() {
    for (let y = 0; y < KE; y++) {
        x = Math.floor((Math.random() * Kartenstapel.length));
        let prodElement = document.createElement('div');
        document.getElementById("Handkarten").appendChild(prodElement);
        Handkarten.push(Kartenstapel[x]);
        let karte = `<p class="${Handkarten[y]}">${Handkarten[y]}</p>`;
        prodElement.innerHTML = karte;
        Kartenstapel.splice(x, 1);
    }
}
zufälligeKarte();
//# sourceMappingURL=main.js.map