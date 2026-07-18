const AuthModel = require('../models/auth.model');

async function getDashboardData(req, res) {
    try {
        const id = req.user.id
        const user = await AuthModel.findOne({
           _id:id
        });
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const dashboardData = {
            Email:user.email,
            fullName:user.fullName,
            Role:user.role
        }
        return res.status(200).json({message:"Dashboard data fetched successfully",data:dashboardData});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error",error:error.message});
    }
}
module.exports = {getDashboardData};
