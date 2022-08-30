const qerys = require("./qerys")

const mostrarAlumnosSalonView = (nombreSalon) => {
    
    //  el retorno de los alumnos de mostrarAlumosSalon 
    const alumnos = qerys.mostrarAlumosSalon(nombreSalon);
    alumnos.forEach(al => {
        // aca imprimes cada resultado o el resultado
       
        console.log("id de alumno:" + al.id,
        " nombres"+al.nombres ,
        "salon" + al.salon )
        
    })
}




module.exports = {
    mostrarAlumnosSalonView: mostrarAlumnosSalonView

}


