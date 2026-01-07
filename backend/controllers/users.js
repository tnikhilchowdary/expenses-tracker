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