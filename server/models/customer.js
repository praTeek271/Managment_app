const mongoose = require ('mongoose');

const schema =mongoose.Schema;
const CustomerSchema = new schema({
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
});