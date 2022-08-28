// MENU
const type = require("./types");
const qery = require("./muestra")



switch ("GET_ALL_STUDENTS") {
    case type.GET_STUDENT:
        return;

    case type.GET_ALL_STUDENTS:
        qery.mostrarAlumosSalon("")
        return;
        
    default:
        return false
}