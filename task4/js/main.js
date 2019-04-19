var task4;
(function (task4) {
    window.addEventListener("load", init);
    let summe = 0;
    let bezeichnung;
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", preisBerechnen);
        }
    }
    document.getElementById("Button").addEventListener("click", pruefen);
    function bestellung(_event) {
        console.log(_event);
        let target = _event.target;
        if (target.checked == true) {
            let prodElement = document.createElement('p');
            document.getElementById("Bestellung").appendChild(prodElement);
            prodElement.innerHTML = target.id;
            prodElement.id = target.id;
        }
        else if (target.checked == false) {
            let parent = document.getElementById("Bestellung");
            for (let i = 0; i < parent.children.length; i++) { //alle children werden in der for schleife durchgegangen und die entclickten werden removed
                if (target.id == parent.children[i].id) {
                    parent.removeChild(parent.children[i]);
                }
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
    preisBerechnen(event);
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
})(task4 || (task4 = {}));
//# sourceMappingURL=main.js.map