  const cursos =["matematica","cienciasnaturales", "fisica1","quimica1", "ingles"]  
  const salones =["a21","a22", "a23"]
  const profesores=["andres montalvo jenier","luis toropoco jaime","rodolfo arrellano chirinos"]
  const idAlumnos=[
    "arr01",
    "am02",
    "alf03",
    "amc04",
    "jb05",
    "ab06",
    "bc07",
    "bo08",
    "bl09",
    "bb10",
    "ba11",
    "bbjm011",
    "bpy012",
    "csa013",
    "mcf014",
    ]
  const alumnos=[
      "Alberola Robles Rafael", 
      "Alcusón Marco",
      "Alonso López Francisca" ,
      "Álvaro Martínez-Carrasco", 
      "Jaime Brasileño",
      "Arias Brenes",
      "Bariain Carrasco", 
      "Barriobero Olarte", 
      "Bastida López", 
      "Berenguer Borja", 
      "Bernad Albiol",
      "Blasco Boix, José Manuel",
      "Bohorquez Pérez, Yanneth" ,
      "Camarasa Sanfelix, Antonio",
      "mario caceres fernandez" 
           ]
     const  notas =[
        15,
        15,
        14,
        11,
        20,
        15,
        17,
        18,
        19,
        11,
        15,
        13,
        16,
        15,
        11

      ]







// console.log("su salon"+ ""+ salon +"sus notas:"+""+"notas"+"datos"+""+datos )


// llamda=(nombre)=>{
//    if (nombre ) {
      
//    }
//    console.log("su salon"+ ""+ salon +"sus notas:"+""+"notas"+"datos"+""+datos ) 
// }

// llamda(juan rayan)

// console.log(alumnos[1])
// console.log("su salon"+ ""+ salon +"sus notas:"+""+"notas"+"datos"+""+datos )  

// var num1,num2
// num1=prompt();

// if(num1 ===0){
//   console.log(alumnos[3] )  
// }



llamda1 =()=>
{console.log("salones:" +" "+ salones +" "+ "profesores:"+" "+ profesores +" "+" alumnos:"+" "+ alumnos+" "+"cursos:"+" "+cursos)}
llamda1();



llamda =()=>
{console.log("salones:" +" "+ salones +" "+ "profesores:"+" "+ profesores +" "+" alumnos:"+" "+ alumnos+" "+"cursos:"+" "+cursos)}
llamda();


const prueba =(num)=>{
const numero = num
  if (numero === 0 ) {
    console.log(alumnos[0], notas[0],  salones[2] )
    
  }
  else if (numero === 1) {
    console.log(alumnos[1],notas[1],salones[0] )
    
  }
  else if (numero === 2) {
    console.log(alumnos[2],notas[2],salones[2] )
    
  }
  else if (numero === 3) {
    console.log(alumnos[3],notas[3],salones[0] )
    
  }
  else if (numero === 4) {
    console.log(alumnos[4],notas[4],salones[2] )
    
  }
  else if (numero === 5) {
    console.log(alumnos[5],notas[5],salones[0] )
    
  }
  else if (numero === 6) {
    console.log(alumnos[6],notas[6],salones[1] )
    
  }
  else if (numero === 7) {
    console.log(alumnos[7],notas[7],salones[0] )
    
  }
  else if (numero === 8) {
    console.log(alumnos[8],notas[8],salones[2] )
    
  }
  else if (numero === 9) {
    console.log(alumnos[9],notas[9],salones[0] )
    
  }
  else if (numero === 10) {
    console.log(alumnos[10],notas[10],salones[1] )
    
  }
  else if (numero === 11) {
    console.log(alumnos[11],notas[11],salones[0] )
    
  }
  else if (numero === 12) {
    console.log(alumnos[12],notas[12],salones[1] )
    
  }
  else if (numero === 13) {
    console.log(alumnos[13],notas[13],salones[2] )
    
  }
  else if (numero === 14) {
    console.log(alumnos[14],notas[14],salones[2] )
    
  }
  
  else{
    console.log("no se encontro alumno")
  }
  }
prueba(0);
