// Ejemplos loops
let numeroSuma=0;
let numeroSumawhile=0;
let numeroDoWhile = 0;
let numerobreak = 0;


// Se ejecuta 1 vez
if (numeroSuma <10){
    numeroSuma++;
    document.write(numeroSuma)
};

// se ejecuta siempre (entra solo si la condición se cumple)
while(numeroSumawhile<10){
    numeroSumawhile+=1;
    document.write(numeroSumawhile)
};

//Se ejecuta 1 vez y luego valida condición para continuar ejecutando
do{
    document.write(numeroDoWhile + "<br>");
    numeroDoWhile++
}while(numeroDoWhile<10);

// break  detiene el codigo cuando la condici´pon se cumpla
while(numerobreak<1000){
    numerobreak++;
    document.write(numerobreak + "<br>")
    if (numerobreak == 10){
        break;
    }
}

// Se declara una variable local para el arreglo
//se ejecuta mientras se cumpla la condición, puede incrementar o disminuir en cada ciclo
for (let i=0;i<10;i++){
    document.write(i + '<br>')
}

// "continue" dentro de un if salta ese ciclo y no se ejecuta


// for in   -  for of
// for in devuelve la posicion
let animales = ['lion', 'cat', 'dog'];

for (animal in animales){
    document.write(animal + "<br>");
};

document.write("<br>");

// for of devuelve el valor
for (animal of animales){
    document.write(animal + "<br>");
};


//label
// Ejemplo extenso para imprimir los valores de un array dentro de un array
array1 = ['Alex','Joel','Alice'];
array2 = ['Jazmin','Pablo',array1];

for (let array in array2){
    if (array == 2){
        for (let array of array1){
            document.write(array+"<br>");
        }
    } else {
        document.write(array2[array]+"<br>");
    }
}

let arraylabel=[5,6,7,8,9,15];
forlabel: //Se defibne el nombre del bloque para finalizarlo
for (let array in arraylabel){
    if (array==5){   
        break forlabel;  //Label se usa para finalizar un cojunto compoleto de bbloques
    };
    document.write(arraylabel[array] + "<br>")  
}


