namespace endabgabe {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2bgossel.herokuapp.com/";

    export function insert(_event: Event): void {
        let query: string = "command=insert";
        query += "&name=" + enterName + "&Pukte"+ highscore;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function finde(_event: Event):void{//Matrikelnummer aus Inputfeld an Server schicekn
        let input: HTMLInputElement = <HTMLInputElement> document.getElementById("matrikelnummer");
        let query: string ="command=finde";
        query += "&finde=" + input.value;
        console.log(query);
        sendRequest(query, handleFindResponse);
    }

    function refresh(_event: Event): void {
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
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
}