import mongoose from "mongoose"
import { nanoid } from "nanoid"

const userSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(10),
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,  
  },
  lastName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

const UserSchema = mongoose.model("UserSchema", userSchema)

export default UserSchema
