import mongoose from "mongoose"

const UserScheme = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique: true,
    },
    email:{
        type:String,
        require:true,
        unique: true,
    },
    password:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true,
    },
    subscribers:{
        type:Number,
        default: 0
    },
    subscribedUsers:{
        type:[String],
    }
},{timestamps:true})

export default mongoose.model("User",UserScheme)