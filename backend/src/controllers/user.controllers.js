import { User } from "../models/user.model.js"

const registerUser=async(req,res,next)=>{
    try {
        const {fullName,userName,email,password}=req.body
        if([fullName,userName,email,password].some((field)=>field?.trim()==='')){
            throw new Error("All field are required")
        }

        const existedUser=await User.findOne({
            $or:[{userName},{email}]
        })

        if(existedUser){
            throw new Error("User Already exist")
        }

        const user=await User.create({
            fullName,
            userName,
            email,
            password
        })

        const createdUser=await User.findById(user._id).select("-password -refreshToken")

        if(!createdUser){
            throw new Error("Something went wrong while registering User")
        }

        return res
        .status(201)
        .json({
            statusCode:201,
            data:createdUser,
            message:"User Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

/*
const loginUser=async(req,res,next)=>{
    
}*/

export {
    registerUser
}