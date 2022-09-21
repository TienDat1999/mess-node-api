import MessageSchema from "../models/message.js";

export const getMessages = async (req, res) => {
  try {
    const messageSchema = await MessageSchema.find();
    res.json(messageSchema);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getMessagesFilter = async (req, res) => {
  const filterParam = req.body;
  const param = {
    creator_id: {
      $in: [`${filterParam.creator_id}`, `${filterParam.recipient_id}`],
    },
    recipient_id: {
      $in: [`${filterParam.creator_id}`, `${filterParam.recipient_id}`],
    },
  };
  try {
    const messageSchema = await MessageSchema.find(param).sort({
      createAt: 1,
    });
    res.json(messageSchema);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const createMessage = async (req, res) => {
  const message = req.body;
  const newMessage = new MessageSchema(message);
  try {
    await newMessage.save();
    res.json(newMessage);
  } catch (err) {
    res.json({ message: err.message });
  }
};
