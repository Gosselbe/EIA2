namespace task12 {
        
    export function feed(_event: MouseEvent): void {
        let positionx: number =  _event.clientX;
        let positiony: number =  _event.clientY;
        for (let i: number = 0; i < 10; i++) {
            let futter: food = new food(positionx, positiony);
            SuperklasseArray.push(futter);
        }
    }
}