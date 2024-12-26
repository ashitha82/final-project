import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://atv096:anilnar9892@fooddel.pgapb.mongodb.net/fooddel').then(()=>console.log("DB Connected"));
   
}

