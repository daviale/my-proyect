// const { salones } = require("./BasedeDatos.js");
const data = require("./BasedeDatos.js");
const alumnos = data.alumnos;
const profesores = data.profesores;
const salones = data.salones;
const cursos = data.cursos;
const notascursos = data.notascursos;



const mostrartotodoslosAlumnos=() =>{
 return console.log(alumnos);
}

const mostartodoslosProfesores=() =>{

    profesores.forEach(prof =>{
        return console.log("profesor:"+prof.nombres )
    })
}

const mostrartodosloSalones=()=>{
    salones.forEach(salon=> {
            return console.log("salon:" + salon.nombre)
        }
    )
}

const mostrartodoslosCursos=()=>{

    cursos.forEach(curso => {
        return console.log("curso:" + curso.nombre)

    });
}

const mostrarUnAlumno=()=>{
    const resultado =  alumnos.filter((alumno => alumno.nombres ));
    if (resultado.length <= 0) {
        return console.log("no se encontraron resultados")
    }
    return console.log(resultado[2]) ;

}

 const mostarUnProfesor=() =>{

    const resultado =  profesores.filter((profesor => profesor.nombres ));
    if (resultado.length <= 0) {
        return console.log("no se encontraron resultados")
    }
    return console.log(resultado[2]) ;
    }

    const mostrarUnSalon=()=>{
        const resultado =  salones.filter((salon => salon.nombres ));
        if (resultado.length <= 0) {
            return console.log("no se encontraron resultados")
        }
        return console.log(resultado[2]) ;
    }

const mostardatoAlumno=(idalumno) =>{
alumnos.forEach(al => {
  if (al.id  === idalumno) {
    notascursos.forEach(nota => {
        if (nota.idalumno === idalumno) {
            console.log(" Notas de cursos: mat ing alge fisi quiimica" + "  "+  nota.promedio )
        }
    });
    return console.log( "Nombres:"+ al.nombres ,
                 "salon:" + al.salon,
                 )
  }   
});
}
	
   mostrarinfoDeMaestro=( idprofesor)=>{
profesores.forEach(prof => {
if (prof.id=== idprofesor ) {
    return console.log("nombre del profesor:" + prof.nombres,
                 "cursos: "+ prof.cursos ,
                 "salon asignado" + prof.salon )
}
});
   }


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

    const salon = salones.filter(e => e.nombre === nombreSalon);
    if(salon.length <= 0) return console.log("no se encontro salon")
    
    const resultado = salon[0].idalumno.map((value)=>{ 
        return value = alumnos.find(al => al.id === value)
    });

    return resultado
} 



module.exports = {
    mostrarAlumosSalon : mostrarAlumosSalon
}
