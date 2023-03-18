//8min 31 min

//Ejemplo función
// Definicion
function saludo(){
    answer = prompt('!Hola! ¿Como fue tu dia?')
    if (answer == "bien"){
        alert('Me alegro');
    } else{
        alert('Que pena')
    }
}

//return -  tambien finaliza la funcion
function retorno(){
    alert('Hola');
    return 'La función se ejecutó correcamente'
}

// let retornando =retorno();
//document.write(retornando)

//parametros

let num1 = 32;
let num2 = 12;

function suma(v1,v2){
    final = v1 + v2;
    document.write('El resultado de la suma es ' + final + '<br>')
}
suma(num1,num2)

// Funciones flecha
//cuando hay solo 1 parametro no es necesario usar parentesis
//Mas de 1 parametro si se usan parentesis
// Sin datos solo de usa "()" vacios  -  Se pueden quitar llaves y usar 1 sola fila
const hi = nombre => document.write(nombre)


hi("Alex")
