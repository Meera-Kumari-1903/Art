const jwt = require('jsonwebtoken');
const singature = "Meera_Signature"
const generateToken = ({_id,role}) =>{
    token = jwt.sign({_id,role}, singature);
    return token;
}
const verifyToken = (token) =>{
    try{
        const playLoad = jwt.verify(token ,singature);
        return {status:true,playLoad};
    }catch (error){
        console.error("yoken verification failed:",error);
        return {status:false,error:"undifinde"};
    }
}
module.exports = {
    generateToken ,verifyToken
};