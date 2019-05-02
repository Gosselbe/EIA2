/*
Aufgabe: task 05 Eisdealer
Name: Bente Gossel
Matrikel: 260304
Datum: 26.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var task5;
(function (task5) {
    window.addEventListener("load", init); //sobald seite geladen führe init aus
    function init() {
        fieldsetBauen(task5.ausfuellen);
        let fieldsets = document.getElementsByTagName("fieldset");
        document.getElementById("Button").addEventListener("click", pruefen);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", preisBerechnen);
        }
    }
    function fieldsetBauen(_sorte) {
        for (let key in _sorte) {
            let i = task5.ausfuellen[key]; //angabe, wo die schleife durchgehen soll, i wird mit keys gefüllt
            let fieldset = document.createElement("fieldset");
            let titel = document.createElement("legend");
            fieldset.appendChild(titel); //legend als child von fieldset festlegen
            document.body.appendChild(fieldset); //fieldset im body anhängen
            for (let k = 0; k < i.length; k++) {
                let input = document.createElement("input");
                let anzeige = document.createElement("HTML");
                anzeige.innerText = i[k].name;
                input.setAttribute("type", i[k].type);
                input.setAttribute("name", i[k].name);
                input.setAttribute("preis", i[k].preis.toString());
                input.setAttribute("value", i[k].value.toString());
                //input.getAttribute("min", i[k].min.toString());
                //input.getAttribute("max", i[k].max);
                //input.getAttribute("step",i[k].step.toString());
                fieldset.appendChild(input);
                fieldset.appendChild(anzeige);
                titel.innerText = i[k].ueberschrift;
                //document.appendChild(anzeige);
            }
        }
    }
    function preisBerechnen(_event) {
        console.log(_event);
        let target = _event.target;
        let summe = 0;
        let inputsammlung = document.getElementsByTagName("input");
        document.getElementById("Bestellpreis").innerHTML = "";
        for (let i = 0; i < inputsammlung.length; i++) {
            if (inputsammlung[i].type == "number") {
                let preis = inputsammlung[i].getAttribute("preis");
                summe += Number(preis) * Number(inputsammlung[i].value);
            }
            if (inputsammlung[i].type == "checkbox" && inputsammlung[i].checked == true) {
                let preis = inputsammlung[i].getAttribute("preis");
                summe += Number(preis);
            }
        }
        let prodElement = document.createElement('div');
        document.getElementById("Bestellpreis").appendChild(prodElement);
        let ausgabe = `<p id="${summe}">${summe}€</p>`;
        prodElement.innerHTML = ausgabe;
    }
})(task5 || (task5 = {}));
function bestellung(_event) {
    let inputsammlung = document.getElementsByTagName("input");
    document.getElementById("Bestellung").innerHTML = "";
    for (let f = 0; f < inputsammlung.length; f++) { //Kollection hat auch  eine Länge
        if (inputsammlung[f].checked == true) {
            let prodElement = document.createElement('p');
            document.getElementById("Bestellung").appendChild(prodElement);
            prodElement.innerHTML = inputsammlung[f].name;
        }
        if (inputsammlung[f].type == "number" && Number(inputsammlung[f].value) > 0) {
            let prodElement = document.createElement('p');
            document.getElementById("Bestellung").appendChild(prodElement);
            prodElement.innerHTML = inputsammlung[f].name;
        }
    }
}
function pruefen() {
    let adresse = document.getElementById("Adresse");
    let postleitszahl = document.getElementById("Postleitszahl");
    if (adresse.value == "" || postleitszahl.value == "") {
        alert("Bitte noch Adresse hinzufügen, sonst finden wir dich nicht :(");
    }
    else {
        alert("Dein Eis ist schon unterwegs");
    }
}
//# sourceMappingURL=main.js.map