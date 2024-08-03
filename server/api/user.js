import User from '../models/userSchema.js'
export const AddUser = async(arg)=>{
    const {name,email,phoneNo,avatar}=arg
    await User.create({name,email,phoneNo,avatar})
    return "User Add Successfully"
}

export const GetAllUser = async()=>{
    const result = await User.find()
    return result
}