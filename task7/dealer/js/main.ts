/*
Aufgabe: task 07 Eisdealer
Name: Bente Gossel
Matrikel: 260304
Datum: 02.05.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace task7 {
    window.addEventListener("load", init); //sobald seite geladen führe init aus

    function init(): void {
        fieldsetBauen(ausfuellen);

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("Button").addEventListener("click", pruefen);
        document.getElementById("submit").addEventListener("click", korrekteAusgabe);
        document.getElementById("asyncron").addEventListener("click", anzeige);
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
            document.getElementById("ausgabe").appendChild(fieldset);
            for (let k: number = 0; k < i.length; k++) {
                let input: HTMLInputElement = document.createElement("input");
                let anzeige: HTMLElement = document.createElement("HTML")
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

    function preisBerechnen(_event: Event): void {
        console.log(_event);

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let summe: number = 0;
        let inputsammlung: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("Bestellpreis").innerHTML = "";
        for (let i: number = 0; i < inputsammlung.length; i++) {
            if (inputsammlung[i].type == "number") {
                let preis: string = inputsammlung[i].getAttribute("preis");
                summe += Number(preis) * Number(inputsammlung[i].value);
            }
            if (inputsammlung[i].type == "checkbox" && inputsammlung[i].checked == true) {
                let preis: string = inputsammlung[i].getAttribute("preis");
                summe += Number(preis);
            }
        }
        let prodElement = document.createElement('div');
        document.getElementById("Bestellpreis").appendChild(prodElement);
        let ausgabe: string = `<p id="${summe}">${summe}€</p>`

        prodElement.innerHTML = ausgabe;
    }


    function bestellung(_event: Event): void {
        let inputsammlung: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("Bestellung").innerHTML = "";
        for (let f: number = 0; f < inputsammlung.length; f++) { //Kollection hat auch  eine Länge
            if (inputsammlung[f].checked == true) {
                let prodElement: HTMLElement = document.createElement('p');
                document.getElementById("Bestellung").appendChild(prodElement);
                prodElement.innerHTML = inputsammlung[f].name;
            }
            if (inputsammlung[f].type == "number" && Number(inputsammlung[f].value) > 0) {
                let prodElement: HTMLElement = document.createElement('p');
                document.getElementById("Bestellung").appendChild(prodElement);
                prodElement.innerHTML = inputsammlung[f].name;
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

    function korrekteAusgabe(_event: Event): void {
        let inputsammlung: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let f: number = 0; f < inputsammlung.length; f++) { //Kollection hat auch  eine Länge
            if (inputsammlung[f].checked == true) {
                inputsammlung[f].setAttribute("value", "1");
            }
        }
    }

    function anzeige(_event: Event): void {
        let inputsammlung: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let url: string = "https://eia2bgossel.herokuapp.com/?"  //Infos starten hinter Fragezeichen
        let anzeige: string = "";
        for (let i: number = 0; i < inputsammlung.length; i++) {
            if (inputsammlung[i].value != "0" && inputsammlung[i].type != "radio") { //ausgabe für Sorte
                anzeige += inputsammlung[i].name + "=" + inputsammlung[i].value + "&";
                //console.log(inputsammlung[i].value)
            }
            if (inputsammlung[i].type == "radio" && inputsammlung[i].checked == true) { //ausgabe für Radiobuttons
                anzeige += inputsammlung[i].getAttribute("name") + "=" + inputsammlung[i].getAttribute("value") + "&";
            }
            if(inputsammlung[i].type == "checkbox" && inputsammlung[i].checked == true){//ausgabe für toppings
                anzeige += inputsammlung[i].name + "=" + inputsammlung[i].value + "&";
            //    console.log("hi")
             }
        }
        url += anzeige;
        console.log(url);
        sendRequestWithCustomData(anzeige);
    }

    function sendRequestWithCustomData(_anzeige:string): void {//code aus sendData
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        let url: string = "https://eia2bgossel.herokuapp.com/?"
        xhr.open("GET", url+ _anzeige );
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {//code aus sendData
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
          //  console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
          //  console.log("response: " + xhr.response);
          let liste:HTMLElement;
          document.getElementById("fassung").innerHTML="";
          liste=document.getElementById("fassung");
          liste.innerHTML+=xhr.response;
        }
    }

}
