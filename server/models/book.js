const mongoose = require ('mongoose');

const schema =mongoose.Schema;
const bookSchema = new schema({
    title:{
        type:String,
        trim:true,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    author:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
    },    
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAT: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('book', bookSchema);