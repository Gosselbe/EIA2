"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //Pogramm sagen mit Node arbeiten
var L05_Server;
(function (L05_Server) {
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
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); //URL wird für response definiert mit gegebenen Anforderungen
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Server kann auch von anderer Quelle als der Hauptseite von aufgerufen werden
        _response.write(_request.url); //Response wird in Request URL hereingeschrieben
        _response.end(); //Response wird an Client geschickt, wird geschlossen
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=Server.js.map