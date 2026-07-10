import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            unique: true,
        },    
        receiverID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            unique: true,
        },
        text: {
            type: String,            
        },
        image: {
            type: String,            
        },
        video: {
            type: String,            
        },
    },
    { timestamps: true }, // createdAt & updatedAt

);

const Message = mongoose.model("Message", messageSchema);
 
export default Message;