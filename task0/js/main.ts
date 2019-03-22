
var Name:string = prompt("Enter your name");


function ausführung():void{

if (Name != null) {
    document.getElementById("einfügen").innerHTML =
    "Hallo" + " " + Name;
  } 

}

ausführung()

console.log("Hallo" + " " + Name )
