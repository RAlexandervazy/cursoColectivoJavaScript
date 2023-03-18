class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso
        this.iniciada = false
        this.instalada = false
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false
            alert("App instalada correctamente")
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }    
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true ){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso:<b>${this.peso}</b><br>
        `
    }
    
}


app1 = new App("30000","5 estrellas","120mb")
app2 = new App("50000","4 estrellas","110mb")
app3 = new App("70000","3 estrellas","130mb")
app4 = new App("120000","5 estrellas","1150mb")
app5 = new App("18000","4 estrellas","132mb")

document.write(`
    ${app1.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
`)
