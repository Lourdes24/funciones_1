//------------Ejercicio 1
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

//--------------Ejercicio 2

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


//--------------Ejercicio 3

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

//--------------Ejercicio 4
/*Una función que devuelva el número de cifras de un entero 
solicitado al usuario*/
function cifras(){
    let numero = prompt("Introduce un número");
    let cifras = numero.length;
    alert(cifras)
}


//--------------Ejercicio 5
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

//--------------Ejercicio 6
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


//--------------Ejercicio 7
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


//--------------Ejercicio 8
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
  
 


//--------------Ejercicio 9
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


 //--------------Ejercicio 10
 //Escribe una función que calcule el promedio de calificaciones
 function calificaciones(){
    let notas = [5,9,6,7,7,8,5,2];
    let suma =0; //inicializamos suma en 0
    //media = suma todas notas/num notas
    for(let i=0; i<notas.length; i++);{
        suma += notas[i]; //suma = suma + notas[i]
    }

    //otra forma de expresarlo
    //for(let i=0; i<=notas.length-1; i++){
    //console.log(notas[i]);
    //suma = suma + notas[i];
    //}
    console.log(suma/notas.length); //mide la longitud de la array
    //logitud de la array = numeros naturales, empieza en 1
    //posiciones de la array = empieza desde 0
    return
 }

    
 //--------------Ejercicio 11
  /*Escribe una función que devuelva el valor máximo de los números 
  enteros dados. Los números vendrán en un array 
  tipo numeros = [4,2,5,1,3,8,9].
  */
 //max = numero [0]; inicializa en primera posición de la array
 //max = 0; esta opción sería para numeros positivos, para cuando conozcamos
 //los valores de las arrays
 //for para recorrer la array
 //if para comparar los número de la array 
 function maximo(){
    let numeros = [4,2,5,1,3,8,9];
    let max = numeros [0];
    //recorrido desde posición 1
    //no tiene sentido comparar el primer elemento consigo mismo
    for (let i=1; i<numeros.length; i++){
        if(max <numeros[i]){
            max = numeros[i];
        }
        console.log(max)
    }
 }


 //--------------Ejercicio 12

//Crea una función que tome una cadena de texto y 
//devuelva el número de palabras únicas en ella.

// function cuentaPalabras(frase){
//     console.log(frase.split(""));
//     console.log(frase.split(" ").length);
//     return frase.split(" ").length;
// }
// let frase="Esta frase tiene 5 palabras"

// alert (cuentaPalabras(frase)); //cuenta las palabras de la frase

//Busca los número pares de un array y crea un nuevo array con ellos.
            // function buscaPares(numeros){
            //     let numeros_pares = [];
            // }
            // let array =[1,2,3,4,5,6];
            // console.log(array);
            // console.log("-------------");

            // array.push(7);
            // console.log(array);

 // Itera a través del array de números
 function buscaPares(numeros) {
    let numeros_pares = [];
  
    // Itera a través del array de números
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 == 0) {
        // Si el número es par, añadirlo al array numeros_pares
        numeros_pares.push(numeros[i]); //añade el valor de lo pares
        //numeros_pares.push(i) Añadiría la posición de los pares
      }
    }
  
    return numeros_pares;
  }
  
  // Ejemplo 
  let array = [1, 2, 3, 4, 5, 6];
  console.log("Array dada:", array);
  console.log("-------------");
  
  array.push(7);
  console.log("Array con un nuevo elemento:", array);
  
  // Encontrar y mostrar los números pares del array
  let numerosParesEncontrados = buscaPares(array);
  console.log("Números pares encontrados:", numerosParesEncontrados);


  //--------------Ejercicio 13

  //Dado un array, duplica cada uno de sus elementos. 
  //Imprime por consola el nuevo array resultante.
  function arrayClonada(){
    let array = ["nom1", "nom2", "nom3"];

    for(let i=0; i<array.length; i++){
        nuevo_array.push(array[i]);
    }
    console.log(nuevo_array);
  }
  
