import mongoose from "mongoose";   
const {Schema, model, models} = mongoose;

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    razorpayKey: { type: String, required: true },
    razorpaySecret: { type: String, required: true },
})

export default mongoose.models.User || mongoose.model("User", userSchema);