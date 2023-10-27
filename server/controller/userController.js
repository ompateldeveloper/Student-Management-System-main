// const user = require('../models/user');
const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secret = "secretforlogin"
function craeteToken(id){
    return jwt.sign({id},secret,{expiresIn:'3d'});
}

const loginUser = async (req,res) => {
    const {email,password} = req.body


    try{
        const user = await Users.login(email,password);
        const username = await user.name;
        console.log("login:",user);
        const token = craeteToken(user.id);
        res.status(200).json({name:username,email,token})
    }catch(err){
        res.status(400).json({err:err.message})
    }
}

const verifyUser = async (req,res)=>{
    const {token} = req.body
    try {
        const {id} = jwt.verify(token, secret,{ algorithm: 'HS256' })
        const verified = await Users.findOne({ _id:id }) 
        res.status(200).json({value:verified?true:false})    
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized',value:false})
    }
}

const signupUser = async (req,res) => {
    const {name,email,password} = req.body

    const token = craeteToken(Users._id);
    try{
        const user = await Users.signup(name,email,password);
        res.status(200).json({name,email,token})
    }catch(err){
        res.status(400).json({err:err.message})
    }
}

module.exports = {loginUser,signupUser,verifyUser};