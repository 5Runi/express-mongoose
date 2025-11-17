
import mongoose from "mongoose";


// define and export a function to connect to the DB 

//assign to a constant so that can use it later in code such as exporting it
//database connection process is asynchronous, so will use an async await function
//often use try catch with the asyn await
//make connect method: mongoose.connect, then make that an await function
export const connectDB = async () => {
    try {//connecting to mongoose and passing in string good enough too, connect method also requires another object, with some arguments; and Sky doing here, but mauybe not needed
        await mongoose.connect(process.env.MONGO_URI);
        //env available maybe cuz its above (in root) or is it config? 
        //because i am using and have the uri stored in a env file i enter that but otherwise would just put uri, but i am sharing username password if i do that
//could we use the const dotenv instead? he doesnt know
        console.log('MongoDB connected ✅');
    }catch (err){
        console.error(`❌ Error: ${err.message}`);
        setTimeout(() => process.exit(2), 100);//1=means generic error, 2= DB connection failure; give the logger a moment to flush, then exit with the code
    }
};

//if that connection won't work, maybe this one will?//MONGO_URI="mongodb+srv://5Runi:jwnY8N2PRfDNcD4h@moncluster.atcxflh.mongodb.net/?appName=MonCluster

//Since i have exported the function above, i will comment this out: module.exports = connectDB; //by exporting it like this is how we can import it as const connectDB in server file