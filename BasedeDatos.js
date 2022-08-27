module.exports = universidad = {
  profesores: [
    {
      id: "p3",
      nombres: "ysln NY",
      cursos: "fisica1",
      salon: "tcpc23",
    },
    {
      id: "p2",
      nombres: "jaun TP",
      cursos: "ingles",
      salon: "tcpc22",
    },

    {
      id: "p1",
      nombres: "andre CD",
      cursos: ["quimica1","algebra"],
      salon: "tcpc21",
    },
  ],
  notascursos: [
    {
      idalumno: "a1",
      promedio : [17,13,16,18,21]
    },
    {
      idalumno: "a2",
      promedio : [18,13,16,18,22]
    },
    {
      idalumno: "a3",
      promedio : [17,20,16,18,23]
    },
    {
      idalumno: "a4",
      promedio : [17,13,16,18,24]
    },
  ],
  cursos: [
    {
      id: "c1",
      nombre: "fisica1",
      profesor:"p3"
    },
    {
      id: "c2",
      nombre: "ingles",
      profesor:"p2"
    },
    {
      id: "c3",
      nombre: "quimica",
      profesor:"p1"
    },
    {
      id: "c4",
      nombre: "algebra",
      profesor:"p1"
  }
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
