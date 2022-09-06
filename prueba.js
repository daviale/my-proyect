	// const { salones } = require("./BasedeDatos.js");
const data = require("./BasedeDatos.js");
const alumnos = data.alumnos;
const profesores = data.profesores;
const salones = data.salones;
const cursos = data.cursos;
const notascursos = data.notascursos;
   
   


const mostrarsalon = (idsalon) => { 
     
    // filtrando el salon
    const salon = salones.filter(s => s.id === idsalon);
    console.log("<<<<<<<<<<<<<<<<<<<<<salom"  + salon);
    if(salon.length <= 0) {
        console.log("no se encontro salon")
        return []
    }
    
    // transformar id de alumnos a modelo alumno
    const producto = salon[0].idsalon.map((revision)=>{ 
                return revision = alumnos.find(al => al.id === revision)
                
    });
// console.log(">>>>>>>>>>>>>>>>>>resultado" + resultado);
    //resultado = arreglo de alumnos
    return producto
 
} 

mostrarsalon("s3");