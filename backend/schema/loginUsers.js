import User from "../schema/users.js";
import bcrypt from "bcryptjs";

export const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"User Not Found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Credentials"
            });
        }
        res.status(200).json({
            message:"Login Succesfully",
            user:{
                id:user._id,
                email:user.email,
                password:user.password
            }
        })
    }
    catch(error){
        res.status(500).json({
            message:"Login Failed",
            error:error.message
        })
    }
}