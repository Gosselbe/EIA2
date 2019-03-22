var Name = prompt("Enter your name");
function ausführung() {
    if (Name != null) {
        document.getElementById("einfügen").innerHTML =
            "Hallo" + " " + Name;
    }
}
ausführung();
console.log("Hallo" + " " + Name);
//# sourceMappingURL=main.js.map