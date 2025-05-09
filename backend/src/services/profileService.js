import Profile from "../models/profileModel.js";

export const createprofile = async (req , res) =>{
    const {myFile} = req.body;
    try {
        const profile = await Profile.create(myFile);
        const newProfile = await profile.save();
        res.status(200).json({success: true, data : newProfile, message: "image profile uploaded successfully"})
    } catch (error) {
        res.status(200).json({success: false, message: "image profile uploaded failure", error})
    }
}