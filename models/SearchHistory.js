import mongoose from "mongoose";

const historySchema = mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    template : {
        type: String,
        required: true,
    },
    prompt : {
        type: String,
        required: true,
    },
    aiResponse : {
        type: String,
        required: false
    }
},{timestamps: true,})

const History = mongoose.model('History', historySchema);

export default History;