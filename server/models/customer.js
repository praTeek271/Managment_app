const mongoose = require ('mongoose');

const schema =mongoose.Schema;
const CustomerSchema = new schema({
    name:{
        type:String,
        trim:true,
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
    },
    phone_no:{
        type:Number,
        required:true,
        trim:true,
    },
    address:{
        type:String,
        required:true,
    },
    credits:{
        type:Number,
        // required:true,
        trim:true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAT: {
        type: Date,
    }

});


module.exports = mongoose.model('Customer', CustomerSchema);