const mongoose = require('mongoose');

let mongooseConnection = mongoose.connect('mongodb+srv://javier:123@codercluster.mmv7k.mongodb.net/project?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}, error =>{
    if(error) throw new Error ('Cannot connect to MongoDB')
    console.log('DB connected')
})

module.exports = mongooseConnection;