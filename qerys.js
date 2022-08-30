// const { salones } = require("./BasedeDatos.js");
const data = require("./BasedeDatos.js");
const alumnos = data.alumnos;
const profesores = data.profesores;
const salones = data.salones;
const cursos = data.cursos;
const notascursos = data.notascursos;


// /////////////////////////ver todos los alumnos:


// const mostrartotodoslosAlumnos=() =>{
//  console.log(alumnos);
// }

// mostrartotodoslosAlumnos();



/////////////////////////mostrar todos los profesores


// const mostartodoslosProfesores=() =>{

//     profesores.forEach(prof =>{
//         console.log("profesor:"+prof.nombres )
//     })
// }

// mostartodoslosProfesores();


/////////////////////////mostrar todos los salones


// const mostrartodosloSalones=()=>{
//     salones.forEach(salon=> {
//             console.log("salon:" + salon.nombre)
//         }
//     )
// }

// mostrartodosloSalones();



/////////////////////////mostrar todos los cursos

// const mostrartodoslosCursos=()=>{

//     cursos.forEach(curso => {
//         console.log("curso:" + curso.nombre)

//     });
// }

// mostrartodoslosCursos();



/////////////////////////mostrar un alumno

// const mostrarUnAlumno=()=>{
//     const resultado =  alumnos.filter((alumno => alumno.nombres ));
//     if (resultado.length <= 0) {
//         return console.log("no se encontraron resultados")
//     }
//     return console.log(resultado[2]) ;

// }



/////////////////////////mostrar un profesor

//  const mostarUnProfesor=() =>{

//     const resultado =  profesores.filter((profesor => profesor.nombres ));
//     if (resultado.length <= 0) {
//         return console.log("no se encontraron resultados")
//     }
//     return console.log(resultado[2]) ;
//     }

//     mostarUnProfesor();



/////////////////////////mostrar un salon

//     const mostrarUnSalon=()=>{
//         const resultado =  salones.filter((salon => salon.nombres ));
//         if (resultado.length <= 0) {
//             return console.log("no se encontraron resultados")
//         }
//         return console.log(resultado[2]) ;
//     }

//     mostrarUnSalon();





///////////////////////// al ver 1 alumno:
		// debo ver, su salon
		// debo ver sus notas
		// debo ver sus datos personales

// const mostardatoAlumno=(idalumno) =>{
// alumnos.forEach(al => {
//   if (al.id  === idalumno) {
//     notascursos.forEach(nota => {
//         if (nota.idalumno === idalumno) {
//             console.log(" Notas de cursos: mat ing alge fisi quiimica" + "  "+  nota.promedio )
//         }
//     });
//     console.log( "Nombres:"+ al.nombres ,
//                  "salon:" + al.salon,
//                  )
//   }   
// });
// }
// mostardatoAlumno("a1");


///////////////////////// al ver 1 profesor
// al ver un profesor debo ver:
// 		sus datos personales
// 		los cursos que enseña
// 		el salon asignado
	
//    mostrarinfoDeMaestro=( idprofesor)=>{
// profesores.forEach(prof => {
// if (prof.id=== idprofesor ) {
//     console.log("nombre del profesor:" + prof.nombres,
//                  "cursos: "+ prof.cursos ,
//                  "salon asignado" + prof.salon )
// }
// });
//    }
//    mostrarinfoDeMaestro("p2");

//////######/////////////////// al ver 1 salon

// al ver un salon debo ver:
// 		datos del salon
// 		que alumnos estan en el salon
// 		que profesor está asignado

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

informaciondeSalon("s1")


