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


let KartenArt: string[] = ["Herz", "Pik", "Kreuz", "Karo"];
let KartenNummer: string[] = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];

let Kartenvariante0: string
let Kartenvariante1: string
let Kartenvariante2: string
let Kartenvariante3: string

let Kartenstapel: string[] = [];

function alleKarten() {
    let i: number
    for (i = 0; i <= KartenNummer.length - 1; i++) {
        Kartenvariante0 = KartenArt[0] + KartenNummer[i];
        Kartenvariante1 = KartenArt[1] + KartenNummer[i];
        Kartenvariante2 = KartenArt[2] + KartenNummer[i];
        Kartenvariante3 = KartenArt[3] + KartenNummer[i];

        Kartenstapel.push(Kartenvariante0, Kartenvariante1, Kartenvariante2, Kartenvariante3);
    }

}

alleKarten();

let Handkarten: string[] = [];

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


let x:number

function zufälligeKarte(){
    for(let y=0; y<KE; y++){
        x=Math.floor((Math.random()*Kartenstapel.length));

        let prodElement=document.createElement('div');

        document.getElementById("Handkarten").appendChild(prodElement);

        Handkarten.push(Kartenstapel[x]);
        let karte:string=`<p class="${Handkarten[y]}">${Handkarten[y]}</p>`

        prodElement.innerHTML = karte;

        Kartenstapel.splice(x,1)
    }
}

zufälligeKarte();




