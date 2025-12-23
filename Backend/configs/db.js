import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/AstraShow`).then(()=>{
            console.log("Connected to MongoDB successfully");
        });
    }catch(err){
        console.log("Error connecting to the database", err);
    }
}
export default connectDB;