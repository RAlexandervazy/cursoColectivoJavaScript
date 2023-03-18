//Ejemplo 1 array
fruits = ['Apple', 'melon', 'lemon'];

document.write(fruits[1])

//Arrays asociativos

let pc = {
    nombre: 'AlexpC',
    procesador:'Ryzen7',
    ram:'16GB',
    espacio:'1500MB'
};

//Ejemplos para acceder al arreglo de acuerdo a las claves
document.write(pc['nombre']);
document.write(pc['espacio']);

nombre = pc['procesador'];

//Salto de linea y uso de backticks (ctrl+shfti+}) para uso de variables
frase = `el nombre del procesador es <b>${nombre}</b> <br>
         el nombre del procesador es <b>${nombre}</b> <br>`
document.write(frase)

