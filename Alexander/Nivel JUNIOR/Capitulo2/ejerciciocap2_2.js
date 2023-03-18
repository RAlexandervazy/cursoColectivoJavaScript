let cantidad = prompt("¿Cuantos alumnos son?");

let alumnosTotales =[];

for(let i=0;i< cantidad; i++){
    alumnosTotales[i]=[prompt("Nombre del alumno " + (i+1)),0]
}


const tomarAsistencia = (nombre,p,dia)=>{
    let presencia = prompt(`Asistencia de ${nombre} día ${dia}`);
    if (presencia=="p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i=0; i<30;i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno,i+1)
    }
}


for (alumno in alumnosTotales){
    let resultado = `<br>${alumnosTotales[alumno][0]}:<br>
    _________Presentes: ${alumnosTotales[alumno][1]}<br>
    _________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])} <br>`;
    if (30 - alumnosTotales[alumno][1]> 3){
        resultado+="<b style= color:red> REPROBADO POR INASISTENCIAS</b><b></b>"
    }else{
        resultado+="<b><b>"
    }
    document.write(resultado)
}