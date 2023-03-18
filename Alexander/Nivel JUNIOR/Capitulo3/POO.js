 class Animal  {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad= edad;
        this.color= color
        this.info=`Soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInformacion(){
        document.write(this.info + "<br>")
    }
    // ladrar(){
    //     if(this.especie=="Perro"){
    //         document.write("Gua! <br>")
    //     }else{
    //         document.write("No puede ladar, no es un perro <br>")
    //     }
    // }
 }


class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        alert("Gau!")
    }
}

 let perro = new Perro ("Perro",5,"rojo","Doberman")
 let gato = new Animal("Gato",10,"Blanco")
//  document.write(perro.info + "<br>")
//  document.write(gato.info + "<br>")

perro.verInformacion()
// perro.ladrar()
// gato.ladrar()
