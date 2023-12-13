function menor(){
    let n1 = prompt ("Introduce el primer número");
        let n2 = prompt ("Introduce el segundo número");
        let n3 = prompt ("Introduce el tercer número");

        if (n1 < n2 && n1 <n3) {
            alert("El número menor es: " + n1);
        }
        else if (n2 < n1 && n2 < n3){
            alert("El número menor es: " + n2);
        }
        else {
            alert("El número menor es:" + n3);
        }
}

function repletra(){
    let frase = prompt ("Introduce una frase:");
        let letra = prompt ("Introduce una letra");
        let contador = 0;
        for (let i = 0; i < frase.length ; i++){
         
         console.log(frase[i].toLowerCase());
         console.log(letra.toLowerCase());

            if (frase[i].toLowerCase() == letra.toLowerCase()) {
            contador++;
         }
        }
        alert ("El número de veces que se repite la letra " + letra + " es " + contador);
}



function calculo(){
    let numero1 = parseInt(prompt("Introduce el primer numero:"));
    let numero2 = parseInt(prompt("Introduce el segundo numero:"));
    let operacion = prompt("Elige la operacion a realizar: ");



switch(operacion){
    case "+":
        alert(numero1+numero2);
    break;
    case "-":
        alert(numero1-numero2);
    break;
    default:
        alert("La operacion realizada no es correcta.");
}
}

function letra(){
    let letra = prompt("Ingrese una letra: ");

    if(letra == 'a'){
        alert("Su número es el 7");
    }else if(letra == 'b'){
        alert("Su número es 9");
    }else if(letra == 'c'){
        alert("Su número es 101");
    }else {
        alert( "Se ha equivocado de letra");
    }
}