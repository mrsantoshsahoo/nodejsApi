const User= require("../model/user_model");


const register_user=async(req,res)=>{
try {
 const user=   new User({
        email:req.body.email,
        name:req.body.name,
        number:req.body.number,
        password:req.body.password
    });
    const user_data= await user.save();
    res.status(201).send({
        statusCode: 201,
        statusMessage: 'Created',
        message: 'Successfully created a user.',
        data: user_data,
    });    
} catch (error) {
    res.status(400).send(error.message);
}
}
const get_user=async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).send({
            statusCode: 200,
            statusMessage: 'user data',
            message: 'Successfully created a user.',
            data: users,
        });    
    } catch (error) {
        res.status(400).send(error.message);
    }
    }
module.exports={
    register_user,
    get_user
}