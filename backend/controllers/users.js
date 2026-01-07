import User from "../schema/users.js";

export const getUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json({
            message:"User Fetched Succesfully",
            users
        })
    }
    catch(error){
        res.status(501).json({
            message:"Error In Fetching User Details",
            error:error.message
        })
    }
}

export const addUsers = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user =  new User({
            name, email, password
        });
        await user.save();
        res.status(201).json({
            message:"User Created Succesfully",
            user
        });
    }
    catch(error){
        res.status(500).json({
            message:"Error in Adding Users",
            error:error.message
        })
    }
}