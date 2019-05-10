namespace task7 {

    export interface sorte {
        ueberschrift: string;
        preis: number;
        name: string;
        type: string;
        value: number;
        min: number;
        max: string;
        step: number;
    }

    export interface sorteangabe {
        [key: string]: sorte[];
    }

    export let ausfuellen: sorteangabe
        = {
        "sorten": [
            { ueberschrift: "Sorten", preis: 0.90, name: "Schokolade", type: "number", min: 0, max: "6", step: 1, value: 0 },
            { ueberschrift: "Sorten", preis: 0.90, name: "Soya Schokolade", type: "number", min: 0, max: "6", step: 1, value: 0 },
            { ueberschrift: "Sorten", preis: 0.90, name: "Vanille", type: "number", min: 0, max: "6", step: 1, value: 0 },
            { ueberschrift: "Sorten", preis: 0.90, name: "Erdbeere", type: "number", min: 0, max: "6", step: 1, value: 0 },
            { ueberschrift: "Sorten", preis: 0.90, name: "Banane", type: "number", min: 0, max: "6", step: 1, value: 0 },
        ],
        "zusaetze": [
            { ueberschrift: "Zusätze", preis: 0.20, name: "Streusel", type: "checkbox", min: 0, max: "0", step: 0, value: 0 },
            { ueberschrift: "Zusätze", preis: 0.20, name: "Sahne", type: "checkbox", min: 0, max: "0", step: 0, value: 0 }
        ]
    }
}