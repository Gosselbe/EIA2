namespace endabgabe {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2bgossel.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + enterName + "&Punkte=" + highscore;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    /*function handleFindeResponse(_event:ProgressEvent):void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }*/

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let SpielerKomplett: Gamer[] = JSON.parse(xhr.response);
            for (let i: number = 0; i < SpielerKomplett.length; i++) {
                SpielerKomplett.sort(vergleicheEintraege);
                console.log(SpielerKomplett[i].punkt);
            }
            console.log(SpielerKomplett);
            for (let i: number = 0; i < 6; i++) {
                //Highscore erstellen
                let prodElement = document.createElement("div");
                document.getElementById("anzeige").appendChild(prodElement);
                prodElement.innerHTML = `<div>${SpielerKomplett[i].name} : ${SpielerKomplett[i].punkt}</div>`;
                console.log(SpielerKomplett[i].name);
            }

        }
    }

    function vergleicheEintraege(a: Gamer, b: Gamer): number {//Array sortieren
        let highscorea: number = a.punkt;
        let highscoreb: number = b.punkt;
        if (highscorea < highscoreb) {
            return 1;
        }
        if (highscorea > highscoreb) {
            return -1;
        }
        return 0;
    }
}