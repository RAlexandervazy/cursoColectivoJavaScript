
let free = false;

// if (edad>=17){
//     document.write('Puedes pasar')
// } else {
//     document.write('No puedes pasar')
// }

const validarCliente = time => {
    let edad = prompt("Cual es tu edad?");
    if (edad >= 18){
        if (time >= 2 && time < 7 && free==false){
            alert('Entrada gratis por ser la primer persona')
            free = true;
        } else{
            alert(`Entrada con pago, hora ${time}`);
        }      
    } else {
        alert('No puedes pasar')
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(9);
validarCliente(6);