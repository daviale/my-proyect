module.exports = universidad = {
  profesores: [
    {
      id: "p3",
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
      id: "p1",
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
    },
    {
      id: "a2",
      nombres: "manuel ER",
      salon: "tcpc22",
    },
    {
      id: "a3",
      nombres: "richard NE",
      salon: "tcpc21",
    },
    {
      id: "a4",
      nombres: "richard NE",
      salon: "tcpc21",
    },
    {
      id: "a5",
      nombres: "yelrin",
      salon: "tcpc22",
    },
  ],
  notas: [{ idalumno: "a1", n1: 13 }],

  salones: [
    {
      id: "s1",
      nombre: "scp20",
      idalumno: ["a1", "a2"],
      idprofesor: "p1",
    },
    {
      id: "s2",
      nombre: "scp21",
      idalumno:["a3","a4"],
      idprofesor: "p2",
    },
    {
      id: "s3",
      nombre: "scp22",
      idalumno: ["a5"],
      idprofesor: "p3",
    },
  ],
};
