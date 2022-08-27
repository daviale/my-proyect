const data = require("./BasedeDatos.js");
const alumnos = data.alumnos;
const profesores = data.profesores;
const salones = data.salones;
const cursos = data.cursos;
const notascursos = data.notascursos;

// { } 
// [] 
// const mostrarAlumosSalon = (idSalon) => { 
   
//     const salon = salones.filter(s => s.id !== idSalon);

//     const resultado = salon[1].idalumno.map((value)=>{ 
//         console.log(value)
//         return value = alumnos.find(al => al.id === value)
//     });

//     return console.log(resultado);
// } 


// mostrarAlumosSalon("s1")


const mostrarAlumosSalon = (nombreSalon) => { 
   
    const salon = salones.filter(e => e.nombre === nombreSalon);

    const resultado = salon[0].idalumno.map((value)=>{ 
        return value = alumnos.find(al => al.id === value)
    });

    return console.log(resultado);
    // console.log(salon)
} 


mostrarAlumosSalon("scp20")