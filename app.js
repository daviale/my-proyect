const inquirer = require("inquirer");
const type = require("./types.js");
const views = require("./views");


inquirer
  .prompt({
    type: "rawlist",
    name: "resp",
    message: "selecciona una",
    choices: [
      type.VIEW_TEACHER_INFO,
      type.VIEW_STUDENT_PER_ROOM,
      type.VIEW_TEACHER_ROOM,
    ],
  })
  .then((answers) => {
    // //answers = {resp:"VIEW_STUDENT_INFO"}
    switch (answers.resp) {
      case type.VIEW_TEACHER_INFO:
        views.muestrameinfoDelProfesor("p1");
        return;

      case type.VIEW_STUDENT_PER_ROOM:
        views.mostrarAlumnosSalonView("tcpc21");
        return;

      case type.VIEW_TEACHER_ROOM:
        return;
      default:
        break;
    }
  });
