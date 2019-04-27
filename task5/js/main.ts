/*
Aufgabe: task 05 Eisdealer
Name: Bente Gossel
Matrikel: 260304
Datum: 26.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace task5 {
    window.addEventListener("load", init); //sobald seite geladen führe init aus
    let summe: number = 0;



    function init(): void {
        fieldsetBauen(ausfuellen);
    
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("Button").addEventListener("click", pruefen);
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", preisBerechnen);
        }

    }

    function fieldsetBauen(_sorte: sorteangabe): void {

        for (let key in _sorte) {
            let i: sorte[] = ausfuellen[key]//angabe, wo die schleife durchgehen soll, i wird mit keys gefüllt
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            let titel: HTMLLegendElement = document.createElement("legend");

            fieldset.appendChild(titel) //legend als child von fieldset festlegen
            document.body.appendChild(fieldset); //fieldset im body anhängen
            for (let k: number = 0; k < i.length; k++) {
                let input: HTMLInputElement = document.createElement("input");
                let anzeige: HTMLElement = document.createElement("HTML")
                anzeige.innerText = i[k].name;
                input.setAttribute("type", i[k].type);
                input.setAttribute("name", i[k].name);
                input.setAttribute("preis", i[k].preis.toString());
                input.setAttribute("value", i[k].value);
                fieldset.appendChild(input);
                fieldset.appendChild(anzeige);
                titel.innerText = i[k].ueberschrift;
                //document.appendChild(anzeige);

            }
        }
    }

    function preisBerechnen(_event: Event): void {
        console.log(_event);

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        document.getElementById("Bestellpreis").innerHTML = "";
        if (target.checked == true) {

            let preis = target.getAttribute('preis');

            summe += Number(preis);
            console.log("summe steht hier: " + summe);
            let prodElement = document.createElement('div');
            document.getElementById("Bestellpreis").appendChild(prodElement);
            let ausgabe: string = `<p id="${summe}">${summe}€</p>`

            prodElement.innerHTML = ausgabe;

        }
        else if (target.checked == false) {
            let preis = target.getAttribute('preis');
            summe -= Number(preis);
            let prodElement = document.createElement('div');
            document.getElementById("Bestellpreis").appendChild(prodElement);
            let ausgabe: string = `<p>${summe}€</p>`;

            prodElement.innerHTML = ausgabe;
        }
    }

    function bestellung(_event: Event) {
        let inputsammlung: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("Input");
        document.getElementById("Bestellung").innerHTML = "";
        for (let f: number = 0; f < inputsammlung.length; f++) { //Kollection hat auch  eine Länge
            if (inputsammlung[f].checked == true) {
                let prodElement: HTMLElement = document.createElement('p');
                document.getElementById("Bestellung").appendChild(prodElement);
                prodElement.innerHTML = inputsammlung[f].value;

            }
        }
    }

    function pruefen(): void {

        let adresse: HTMLInputElement = <HTMLInputElement>document.getElementById("Adresse");
        let postleitszahl: HTMLInputElement = <HTMLInputElement>document.getElementById("Postleitszahl");

        if (adresse.value == "" || postleitszahl.value == "") {
            alert("Bitte noch Adresse hinzufügen, sonst finden wir dich nicht :(")
        }

        else {
            alert("Dein Eis ist schon unterwegs")
        }
    }
    pruefen()
}