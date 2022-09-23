import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdefghi", 10);

const messageSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(10),
    require: true,
  },
  subject: {
    type: String,
    maxLength: [50, "Max length exceeded subject"],
    require: true,
  },
  message_body: {
    type: String,
    maxLength: [100, "Max length exceeded message body"],
    require: true,
  },
  creator_id: {
    type: String,
    require: true,
  },
  recipient_id: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const MessageSchema = mongoose.model("MessageSchema", messageSchema);

export default MessageSchema;
