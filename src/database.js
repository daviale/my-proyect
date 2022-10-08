import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://axel:iaeRF5lUZnZLCMyi@cluster0.rarlj.mongodb.net/appi")
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))

// "mongodb+srv://yelsino:c0oMDedaB6qpzCNC@cluster0.blx9i.mongodb.net/nscarlos-v1"
// "mongodb+srv://axel@admin:axel@cluster0.rarlj.mongodb.net/apissets"

// comandos que usa en el video
// ,{
//     userNewUrlParser:true,
//     useUnifiedTopology:true,
//     userFindAndModify:true
// }

// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");

// const MongoClient = require("mongodb").MongoClient;
// const uri = "mongodb+srv://axel:axel@cluster0.rarlj.mongodb.net/?retryWrites=true&w=majority";
// MongoClient.connect(uri, {useUnifiedTopology: true }, (err, client) => {
//   if (err) console.log("Error occurred connecting to MongoDB...");
//   console.log("Connected to MongoDB!");
// });
// //Fin código nuevo
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });