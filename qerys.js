// const { salones } = require("./BasedeDatos.js");
const { Console } = require("console");
const data = require("./BasedeDatos.js");
const alumnos = data.alumnos;
const profesores = data.profesores;
const salones = data.salones;
const cursos = data.cursos;
const notascursos = data.notascursos;



const mostrartodoslosAlumnos=() =>{
 return (alumnos);
}

const mostartodoslosProfesores=() =>{

    profesores.forEach(prof =>{
       
    })
}

const mostrartodosloSalones=()=>{
    salones.forEach(salon=> {
            
        }
    )
}
    



const mostrarAlumosSalon = (nombreSalon) => { 
     
    // filtrando el salon
    const salon = salones.filter(e => e.nombre === nombreSalon);
    // console.log("<<<<<<<<<<<<<<<<<<<<<salom"  + salon);
    if(salon.length <= 0) {
        console.log("no se encontro salon")
        return []
    }
    
    // transformar id de alumnos a modelo alumno
    const resultado = salon[0].alumno.map((value)=>{ 
                return value = alumnos.find(al => al.id === value)
                
    });
// console.log(">>>>>>>>>>>>>>>>>>resultado" + resultado);
    //resultado = arreglo de alumnos
    return resultado
 
} 

const mostrarinfoDeProfesor=( idprofesor)=>{
   
    const datoProfesor = profesores.filter(prof =>  prof.id == idprofesor);
    
    return datoProfesor
    
}

const mostarSalon=  (idsalon) => {

    const salon =  salones.filter((s)=>{
        // aca tu codigo
        if(s.id === idsalon){
            return s
        }
    });

    if(salon.length === 0){
        console.log("no se encontró el salon")
        return  
    }else {
        const alumnos = mostrarAlumosSalon(salon[0].nombre);
        salon[0].idalumno = alumnos;
        return salon[0]
    }
   
}




module.exports = {
    mostrarAlumosSalon : mostrarAlumosSalon,
    mostrarinfoDeProfesor : mostrarinfoDeProfesor,
    mostarSalon: mostarSalon,
    
}

