const userService = require(`../Services/user-service`);
const User = require("../Model/userModel");
const inputvalidationException = require('../exception/inputvalidationException');

const addNewUser = async ( req,res) => {
     
    try{
        const {firstName,lastName,email,password, address, language,contact,type,role} = req.body;
        let user = {
            firstName,
            lastName,
            email,
            password,
            address,
            language,
            contact,
            type: type,
            role: role
        };
        user = await userService.addNewUser(user)
        return res.status(200).send(user);
    } catch (error){
        console.error(error);
        return res.
        status(error instanceof  inputvalidationException ? 400:500)
        .send({message: error.message});
    }
}
const loginUser = async (req,res) =>{
    try{
        const {email,password} = req.body;
        const data = await userService.loginuser(email,password);
        return res.status(200).send(data);
    } catch (error) {
        console.error(error);
        return res.
        status(500)
        .send({message:error.message});
    }
};

const logoutUser = async (req, res) => {
    try{
    const {token} = req;
    let user = await User.findOne({_id: req.user._id});
    user.token = user.token.filter((t) => t.token !== token);
    await user.save();  
    return res.status(200).send();
    }catch (error) {
        console.error(error);
        return res.
        status( 500)
        .send({message: error.message});
    }
}




module.exports = {
    addNewUser, loginUser, logoutUser,
}