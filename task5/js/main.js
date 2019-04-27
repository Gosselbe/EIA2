var task5;
(function (task5) {
    window.addEventListener("load", init); //sobald seite geladen führe init aus
    let summe = 0;
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
                input.setAttribute("value", i[k].value);
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
        document.getElementById("Bestellpreis").innerHTML = "";
        if (target.checked == true) {
            let preis = target.getAttribute('preis');
            summe += Number(preis);
            console.log("summe steht hier: " + summe);
            let prodElement = document.createElement('div');
            document.getElementById("Bestellpreis").appendChild(prodElement);
            let ausgabe = `<p id="${summe}">${summe}€</p>`;
            prodElement.innerHTML = ausgabe;
        }
        else if (target.checked == false) {
            let preis = target.getAttribute('preis');
            summe -= Number(preis);
            let prodElement = document.createElement('div');
            document.getElementById("Bestellpreis").appendChild(prodElement);
            let ausgabe = `<p>${summe}€</p>`;
            prodElement.innerHTML = ausgabe;
        }
    }
    function bestellung(_event) {
        let inputsammlung = document.getElementsByTagName("Input");
        document.getElementById("Bestellung").innerHTML = "";
        for (let f = 0; f < inputsammlung.length; f++) { //Kollection hat auch  eine Länge
            if (inputsammlung[f].checked == true) {
                let prodElement = document.createElement('p');
                document.getElementById("Bestellung").appendChild(prodElement);
                prodElement.innerHTML = inputsammlung[f].value;
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
    pruefen();
})(task5 || (task5 = {}));
//# sourceMappingURL=main.js.map