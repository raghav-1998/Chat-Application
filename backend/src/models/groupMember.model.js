import mongoose from "mongoose";

const groupMemberSchema=mongoose.Schema({
    groupId:{
        type:mongoose.Types.ObjectId,
        ref:"Group"
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    role:{
        type:String,
        enum:["Member","Admin"],
        default:"Member"
    }
},{
    timestamp:true
})

export const GroupMember=mongoose.model("GroupMember",groupMemberSchema)