var endabgabe;
(function (endabgabe) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2bgossel.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + endabgabe.enterName + "&Punkte" + endabgabe.highscore;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    endabgabe.insert = insert;
    function finde(_event) {
        let input = document.getElementById("matrikelnummer");
        let query = "command=finde";
        query += "&finde=" + input.value;
        console.log(query);
        sendRequest(query, handleFindResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
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
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=DBClient.js.map