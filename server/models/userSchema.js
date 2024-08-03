import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String },
    avatar: { type: String }
})

const userModel = mongoose.models.graphql || mongoose.model('graphql',userSchema)
export default userModel