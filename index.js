const inquirer = require("inquirer");
const type = require("./types.js")
const qerys = require("./muestra")


inquirer.prompt({
    type: 'rawlist',
    name: 'resp',
    message: 'Que quieres hacer?',
    choices: [type.VIEW_STUDENT_INFO,type.VIEW_STUDENT_NOTE,type.VIEW_STUDENT_ROOM]
}).then(answers => {
    // //answers = {resp:"VIEW_STUDENT_INFO"}
    switch (answers.resp) {
        case type.VIEW_STUDENT_INFO:
            renderizar.mostrarAlumnosView("scp20")
            return;

        case type.VIEW_STUDENT_NOTE:
            return;

        case type.VIEW_STUDENT_ROOM:
            return;    
        default:
            break;
    }
   
})