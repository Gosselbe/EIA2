namespace task5 {


    export interface sorte {
        ueberschrift: string;
        preis: number;
        name: string;
        type: string;
        value: string;
    }

    export interface sorteangabe {
        [key: string]: sorte[];
    }

    export let ausfuellen: sorteangabe
        = {
        "sorten": [
            { ueberschrift: "Sorten", preis: 0.90, name: "Schokolade", type:"checkbox", value:"Schokolade"},
            { ueberschrift: "Sorten", preis: 0.90, name: "Soya Schokolade", type:"checkbox", value:"Soya Schokolade"},
            { ueberschrift: "Sorten", preis: 0.90, name: "Vanille", type:"checkbox", value:"Vanille"},
            { ueberschrift: "Sorten", preis: 0.90, name: "Erdbeere", type:"checkbox", value:"Erdbeere"},
            { ueberschrift: "Sorten", preis: 0.90, name: "Banane", type:"checkbox", value:"Banane"},
        ]  ,
        "zusaetze": [
                { ueberschrift: "Zusätze", preis: 0.20, name: "Streusel", type:"checkbox", value:"Streusel"},
                { ueberschrift: "Zusätze", preis: 0.20, name: "Sahne", type:"checkbox", value:"Sahne"}
            ],
        }}