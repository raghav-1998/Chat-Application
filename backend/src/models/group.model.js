import mongoose from "mongoose";

const groupSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    description:{
        type:String,
    }
},{
    timestamp:true
})

export const Group=mongoose.model("Group",groupSchema)