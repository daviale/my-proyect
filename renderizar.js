const qerys = require("./qerys")

const mostrarAlumnosView = (idAlumno) => {
    const alumnos = qerys.mostrarAlumosSalon(idAlumno);
    alumnos.forEach(al => {
        // aca imprimes cada resultado o el resultado
        console.log(al.id)
        console.log(al.nombres)
        console.log(al.salon)
    })
}

module.exports = {
    mostrarAlumnosView: mostrarAlumnosView
}