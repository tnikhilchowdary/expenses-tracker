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
        res.status(200).json({
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

export const updateUsers = async (req, res) => {
    try{
        const {id} = req.params;
        const updateUsers = await User.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        );

        if(!updateUsers){
            return res.status(404).json({
                message:"User Not Found"
            });
        }

        res.status(200).json({
            message:"User Updated Succesfully",

        })
    }
    catch(error){
        res.status(500).json({
            message:"Error in Updating Users",
            error:error.message
        })
    }
}

export const deleteUsers = async (req, res) => {
    try{
        const {id} = req.params;
        const deleteUsers = await User.findByIdAndDelete(id);
        res.status(200).json({
            message:"User Deleted Succesfully",
            deleteUsers
        })
    }
    catch(error){
        res.status(500).json({
            message:"Errorn in Deleting Users",
            error:error.message
        })
    }
}
