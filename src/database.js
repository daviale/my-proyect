import mongoose from 'mongoose'

mongoose.connect("mongodb://127.0.0.1:27017/Appi")
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))



// import mongoose from 'mongoose'

// mongoose.connect("mongodb+srv://axel:iaeRF5lUZnZLCMyi@cluster0.rarlj.mongodb.net/appi")
// .then(db => console.log('Db is connected'))
// .catch(error => console.log(error))
