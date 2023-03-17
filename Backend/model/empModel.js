import mongoose from 'mongoose';

const empSchema = mongoose.Schema({
    Name:String,
    Age:Number,
    Address:String,
});

const empModel = mongoose.model('EmpData',empSchema);
export default empModel;