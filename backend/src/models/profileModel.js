import mongoose from "mongoose";
const ProfileSchema = mongoose.Schema({
    myFile: String
});
const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;