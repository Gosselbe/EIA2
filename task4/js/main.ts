/*Aufgabe: task4 Eisdealer Name: Bente Gossel
    Matrikel:260304
    Datum: 19.04.19
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


namespace task4 {

    window.addEventListener("load", init);
    let summe: number = 0;
    let bezeichnung: string;
    function init(_event: Event): void {
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", preisBerechnen);
        }
    }

    document.getElementById("Button").addEventListener("click", pruefen);

    function bestellung(_event: Event): void {
        console.log(_event);

        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.checked == true) {

            let prodElement = document.createElement('p');
            document.getElementById("Bestellung").appendChild(prodElement);
            prodElement.innerHTML = target.id;
            prodElement.id = target.id;

        }
        else if (target.checked == false) {
            let parent: HTMLDivElement = <HTMLDivElement>document.getElementById("Bestellung");
            for (let i: number = 0; i < parent.children.length; i++) {//alle children werden in der for schleife durchgegangen und die entclickten werden removed
                if (target.id == parent.children[i].id) {
                    parent.removeChild(parent.children[i]);
                }
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

    preisBerechnen(event)

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