
const {Schema,model}= require('mongoose');
const{isEmail}=require('validator');
const { encryptPassword, checkPassword } = require('../bcrypt');
const { generateToken } = require('../jwt');

const userSchema = new Schema({
    firstName:{ type:String,trim:true,required:true},
    lastName:{type:String,trim:true,required:true},
    email:{type:String,trim:true,required:true,unique:true,validate:{validator(email){isEmail(email)}}},
    password:{type:String,trim:true,required:true,minlength:8,trim:true,validate:{
        validator(pass){
            if(
                pass.includes(' ')||
                pass.includes('\n')||
                pass.includes('\t')
            ){
                throw new Error("Password Should not Contain spaces or tabs");
            }
            if(pass.toLowerCase().includes('password')){
                throw new Error("Password should not contain the word password");
            }
            return true;
        },
    }},
    address:{type:String,required:true},
    language:{type:String,required:true},
    contact:{type:String,required:true,maxlength:12},
    type:{type:String,enum:['Viewer','Seller'],default:'viewer'},
    role:{type:String,enum:['Admin','User'],default:'User'},
    token:[{type:String}]
})

userSchema.pre('save',async function(next){
    const user = this;
    if(user.modifiedPaths().includes('password')){
        user.password = await encryptPassword(user.password);
    }
    next();
});
userSchema.statics.findByEmailAndPasswordForAuth = async (email,password) =>{
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error("Invalid email or password");
        }
        const encryptPassword = user.password;
        const isMatch = await checkPassword(password,encryptPassword);
        if(!isMatch){
            throw new Error('Invalid email or password');
        }
        console.log('login sucessful');
        return user;

    }catch(error){
        console.error(error);
        throw error;
    }
}
userSchema.methods.generateToken = function () {
    const user = this;
    const token = generateToken(user); // returns string
    user.token.push(token);            // ✅ push string directly
    user.save();
    return token;
};

userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    delete user.token; // optional, hide token from API response
    return user;
};



const User=model('User',userSchema);
module.exports=User;