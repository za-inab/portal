import mongoose from "mongoose";


const connectDB = async (uri) => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  await mongoose.connect(uri);
};


export default connectDB;