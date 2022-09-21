import UserSchema from "../models/users.js"

export const getUsers = async (req, res) => {
  try {
    const userSchema = await UserSchema.find()
    res.json(userSchema)
  } catch (err) {
    res.json({ message: err.message })
  }
}

export const createUser = async (req, res) => {
  const user = req.body

  const newUser = new UserSchema(user)
  try {
    await newUser.save()
    res.json(newUser)
  } catch (err) {
    res.json({ message: err.message })
  }
}
