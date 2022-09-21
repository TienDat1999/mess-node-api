import mongoose from "mongoose"
import { nanoid } from "nanoid"

const userSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(10),
    require: true,
  },
  firstName: {
    type: String,
    maxLength: [50, "Max length exceeded first name"],
    require: true,
  },
  lastName: {
    type: String,
    maxLength: [50, "Max length exceeded last name"],
    require: true,
  },
  age: { type: Number, require: true, min: 16 },
  createDate: {
    type: Date,
    default: Date.now,
  },
})

const UserSchema = mongoose.model("UserSchema", userSchema)

export default UserSchema
