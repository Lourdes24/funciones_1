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

/*Una función que devuelva el número de cifras de un entero 
solicitado al usuario*/
function cifras(){
    let numero = prompt("Introduce un número");
    let cifras = numero.length;
    alert(cifras)
}


/*Una función que muestre al usuario una secuencia 
de * (se debe construir la cadena de uno en uno), 
la cantidad de * será solicitada al usuario*/
function asteriscos(){
    let cadena = prompt("Introduce cuantos * quieres");
    let dibujo = " ";
    for(let i=0; i<cadena; i++){
        dibujo+="*";
    }
    alert(dibujo);
}

/*Una función que permita mostrar la secuencia 
(se debe construir la cadena de uno en uno):
 *+_*+_*+_*+_ */
function secuencia(){
    let char = " ";
    let sec = "";
    for (let i = 0; i<1; i++){
        switch(i%3){
            case 0:
                char= "*";
                break;
            case 1:
                char= "+";
                break;
            case 2:
            char= "_";
            break;

        }
        sec = sec + char;
    }
    alert(sec)
}


// function secuencia(){
//     let peticion = prompt("Introcuce las veces que quieres la secuencia");
//     let secuencia = '';

//     for (let i = 0; i < peticion; i++) {
//       if (i % 3 == 0) {
//         secuencia += '*';
//       } else if {
//         secuencia += '+';
//       }else  {
//         secuencia += '_';
//       }
//     }
//     console.log(secuencia);
  
// }

// function secuencia() {
//     let cantidad = prompt("Introduce la cantidad de repeticiones:");
//     let opcion1 = "*";
//     let opcion2 = "+";
//     let opcion3 = "_";
//     let resultado = " ";

//     for(let i=0; i<cantidad; i++){
//         if()
//     }



/*Una función que permita mostrar un triángulo como el siguiente:
*
**
***
****
*****
*/
function triangulo(filas) {
    let triaPintado = " ";
    for (let i = 1; i <= filas; i++) {
      let linea = '';
      for (let j = 1; j <= i; j++) {
        linea += '*';
        
      }
     
      triaPintado += linea + "\n";
    
    }
    console.log(triaPintado)
    alert(triaPintado);
  }
  
 



  /*Una función que devuelva la diferencia 
  en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)*/
  function fecha(){
    let frase="Esta frase es una frase larga de ejemplo";
    let arrayFrase = frase.split(" ");//convierte la frase en 
    console.log (arrayFrase.length);

//     let fecha1 = prompt("Introduce 1 fecha");
//     let fecha2 = prompt("Introduce fecha 2");
//     console.log(fecha1);


//     let arrayDate1 = date1.split("-"); //convierte la fecha en array, es decir mete los datos en dos columnas en este caso
//     let arrayDate2 = date2.split("-");

//     //Construimos array
//     let day1= arrayDate1[0];
//     let month1 = arrayDate1[1];
//     let day2= arrayDate2[0];
//     let month2 = arrayDate2[1];

//     let months =[31,28,31,30,31,30,31,31,30,31,30,31];

//     let resultado = months [month1-1] 

 }

    
  

