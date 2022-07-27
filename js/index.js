//Variables

let entrada = prompt("Ingresar un dia de clase de JS")

//Repetimos hasta que se ingrese "ESC"

while (entrada != "ESC") {
    switch (entrada) {
        case "lunes":
            alert ("Correcto!, Lunes es dia de clase de JS");
            break;
        case "miercoles":
            alert ("Correcto!, Miercoles es dia de clases de JS")    
            break;
        default:
            alert("Ese dia no hay clases :( , ingresá un dia válido de clase de JS");
            break;
    }
    entrada = prompt("Ingresar un dia de clase de JS");
}