import MessageSchema from "../models/message.js"

export const getMessages = async (req, res) => {
  try {
    const messageSchema = await MessageSchema.find()
    res.json(messageSchema)
  } catch (err) {
    res.json({ message: err.message })
  }
}

export const createMessage = async (req, res) => {
  const message = req.body

  const newMessage = new MessageSchema(message)
  try {
    await newMessage.save()
    res.json(newMessage)
  } catch (err) {
    res.json({ message: err.message })
  }
}
