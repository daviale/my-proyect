module.exports = universidad = {
  profesores: [
    {
      id: "p1",
      nombres: "ysln NY",
      cursos: ["fisica1"],
      salon: "tcpc23",
    },
    {
      id: "p2",
      nombres: "jaun TP",
      cursos: ["ingles"],
      salon: "tcpc22",
    },

    {
      id: "p3",
      nombres: "andre CD",
      cursos: ["quimica1","algebra"],
      salon: "tcpc21",
    },
  ],
  alumnos: [
    {
      id: "a1",
      nombres: "IGNACIO UR",
      salon: "tcpc23",
      promedio:"16"
    },
    {
      id: "a2",
      nombres: "manuel ER",
      salon: "tcpc22",
      promedio:"18"
    },
    {
      id: "a3",
      nombres: "miguel tw",
      salon: "tcpc21",
      promedio:"15"
    },
    {
      id: "a4",
      nombres: "richard NE",
      salon: "tcpc21",
      promedio:"11"
    },
    {
      id: "a5",
      nombres: "yelrin",
      salon: "tcpc22",
      promedio:"14"
    },
  ],
 
  

  salones: [
    {
      id: "s1",
      nombre: "tcpc21",
      idalumno: ["a1", "a2"],
      idprofesor: "p1",
    },
    {
      id: "s2",
      nombre: "tcpc22",
      idalumno:["a3","a4"],
      idprofesor: "p2",
    },
    {
      id: "s3",
      nombre: "tcpc23",
      idalumno: ["a5"],
      idprofesor: "p3",
    },
  ],
};
