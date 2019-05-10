"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url"); //Pogramm sagen mit Node arbeiten
var task7;
(function (task7) {
    console.log("Starting server"); // in Konsole wird "Starting server" ausgegeben
    let port = Number(process.env.PORT); //neue Variable Namens port wird erstellt, von Type number, alles was in der Umgebungsvariable Port steht, wird in Nummer umgewandelt
    if (!port) //wenn Port falsch
        port = 8100; //Port bekommt Wert 8.100(Localhost)
    let server = Http.createServer(); //neue Variable Server vom Typ http Server wird erstellt, Server wird kreiiert
    server.addListener("request", handleRequest); //Eventlistener für Anfragen an den Server, reagiert auf ankommmende Nachricht, handleRequest wird durchgeführt
    server.addListener("listening", handleListen); //Eventlistener an den Server, handleListen wird ausgeführt
    server.listen(port); //Server hört auf Port, empfänglich für dessen Aktivitäten
    function handleListen() {
        console.log("Listening"); //fucntion handleListen in Console ausgeführt
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //in der Console wird "I hear voices!" ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //URL wird für response definiert mit gegebenen Anforderungen
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Server kann auch von anderer Quelle als der Hauptseite von aufgerufen werden
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");
        _response.end(); //Response wird an Client geschickt, wird geschlossen
    }
})(task7 || (task7 = {}));
//# sourceMappingURL=Server.js.map