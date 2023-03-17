import mongoose from "mongoose";

const connectDB = async (Url) => {
    mongoose.connect(`${Url}`).then(() => {
        console.log('connected to the database.');
    }).catch((err) => {
        console.log('while connecting database got a error: ', err);
    })
}
export default connectDB