const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');

mongoose.connect('mongodb+srv://javier:123@codercluster.mmv7k.mongodb.net/ecommerce2?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, error =>{
    if(error) throw new Error ('Cannot connect to MongoDB')
    console.log('DB connected')
})

module.exports = mongoose