// const { salones } = require("./BasedeDatos.js");
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

const mostrartodoslosCursos=()=>{

    cursos.forEach(curso => {
        

    });
}

///////////////////////////////////////////////


const  informaciondeSalon=(idsalon) => {

	salones.filter(s => {
		idsalon  == s.id ? console.log("nombre de salon" + s.nombre,
		                                                    ) : 0 
	alumnos.forEach(a => { 
		s.idalumno === a.id  ? console.log("alumno" + a.nombres ) : 0
		console.log(s.id)
	});
	});
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
    const resultado = salon[0].idalumno.map((value)=>{ 
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






module.exports = {
    mostrarAlumosSalon : mostrarAlumosSalon,
    mostrarinfoDeProfesor : mostrarinfoDeProfesor,
}

