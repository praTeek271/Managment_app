const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB= async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODBURL,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        });
        console.log(`Mongodb DATABASE connected : ${conn.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB;