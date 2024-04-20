import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    }

})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }
    this.password=await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(this.password,password)
}

export const User=mongoose.model("User",userSchema)