const{Schema,model}=require('mongoose');
const contentCategorySchema= new Schema({
    name:{type:mongoose.ObjectId,ref:'contentType',required:true},
}, {timestamps:true})
module.exports=mongoose.model('contentCategory',contentCategorySchema)