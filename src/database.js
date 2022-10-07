import mongoose from 'mongoose'

mongoose.connect("mongodb://127.0.0.1:27017/Appi")
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))


// comandos que usa en el video
// ,{
//     userNewUrlParser:true,
//     useUnifiedTopology:true,
//     userFindAndModify:true
// }

