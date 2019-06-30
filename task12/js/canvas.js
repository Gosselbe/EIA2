var task12;
(function (task12) {
    function feed(_event) {
        let positionx = _event.clientX;
        let positiony = _event.clientY;
        for (let i = 0; i < 10; i++) {
            let futter = new task12.food(positionx, positiony);
            task12.SuperklasseArray.push(futter);
        }
    }
    task12.feed = feed;
})(task12 || (task12 = {}));
//# sourceMappingURL=canvas.js.map