import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    chats:[JSON],
    userID:{
        type:Schema.Types.ObjectId,
        ref:"users"
    }
},{timestamps:true})

export default mongoose.model('chats',chatSchema)