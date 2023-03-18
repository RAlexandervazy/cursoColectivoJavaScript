class celulares {
    constructor(color,peso,rdp,rdc,ram){
        this.color=color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram
        this.encendido= false
    }

    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular encendido");
            this.encendido = true
        } else {
            alert ("El celular esta apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular");
        } else {
            alert ("El celular esta apado")
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolución de: ${this.rdc}`)
    }

    grabarVideo(){
        alert(`Grabando video en ${this.rdc}`)
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolución de pantalla: <b>${this.rdp}</b><br>
        Resolución de cámara: <b>${this.rdc}</b><br>
        Memoria Ram: <b>${this.ram}</b><br>
        `
    }
}



class celularAltaGama extends celulares{
    constructor(color,peso,rdp,rdc,ram,rdce) {
        super(color,peso,rdp,rdc,ram)
        this.resolucionDeCamaraExtra = rdce;
    }

    grabarVideoLento(){
       alert("Estas grabando en camara lenta"); 
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar el reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución de camara extra: ${this.resolucionDeCamaraExtra}`
    }
}


// celular1= new celulares("rojo","150","5","HD","6GB");
// celular2= new celulares("azul","100","10","HGR","8GB");
// celular3= new celulares("megro","50","4","full HD","12GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.presionarBotonEncendido()
celular1 = new celularAltaGama("rojo","130gr","5.2","4k","3GB","Full HD")
celular2 = new celularAltaGama("negro","142gr","6","4k","4GB","HD")
document.write(`
${celular1.infoAltaGama()}<br>
${celular2.infoAltaGama()}<br>
`)


