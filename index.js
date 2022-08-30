const inquirer = require("inquirer");

inquirer.prompt({
    type: 'rawlist',
    name: 'colors',
    message: 'Que quieres hacer?',
    choices: ['1111','2222','3333']
}).then(answers => {
    if(answers.colors === "1111"){
        inquirer.prompt({
            type: 'rawlist',
            name: 'result',
            message: 'Seleccione una opcion',
            choices: ['a','b','b']
        })
    }
})
