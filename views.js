const qerys = require("./qerys")

const mostrarAlumnosSalonView = (nombreSalon) => {
    
    //  el retorno de los alumnos de mostrarAlumosSalon 
    const alumnos = qerys.mostrarAlumosSalon(nombreSalon);
    // console.log(">>>>>>>alumnos" +alumnos);
    alumnos.forEach(al => {
        // aca imprimes cada resultado o el resultado
       
        console.log(" nombres"+al.nombres,
                    "salon" + al.salon ,
                    "notas" + al.promedio )
        
    })
}

const muestrameinfoDelProfesor =(idprofesor) => {

    const profesores = qerys.mostrarinfoDeProfesor(idprofesor);
    // console.log(">>>>> PROFESORES  "   +  profesores)
 profesores.forEach(prof =>{
     console.log("nombre profesor:" + prof.nombres,
    "cursos: "+ prof.cursos ,
    "salon asignado" + prof.salon )


 }
    )
}

const mostarSalonView = (idSalon) => {
    const salon = qerys.mostarSalon(idSalon);
    console.log(">>>Datos de Salon")
    console.log("id: ", salon.id)
    console.log("nombre: ", salon.nombre)
    console.log(">>>Estudiantes de Salon")
    salon.alumno.forEach((al, index)=>{
        console.log("   >>>Estudiante ", ++index)
        console.log("       id: ", al.id)
        console.log("       nombres: ", al.nombres)
        console.log("       salon: ", al.salon)
        console.log("       promedio: ", al.promedio)
    })
}





module.exports = {
    mostrarAlumnosSalonView: mostrarAlumnosSalonView,
    muestrameinfoDelProfesor : muestrameinfoDelProfesor,
    mostarSalonView: mostarSalonView,
    
}


