const{Schema,model}=require('mongoose');
const regionSchema=new Schema({
    name:{type:mongoose.ObjectId,ref:'region',required:true},

} ,{timestamps:true});
module.exports=mongoose.model('regionCategory',regionSchema);
