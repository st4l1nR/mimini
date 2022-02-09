import {connection, Schema, model} from 'mongoose'

delete connection.models["User"]

const userSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    role: {
        type:String,
        default:"admin"
    },
    refreshToken: String
})

export default model("User", userSchema)