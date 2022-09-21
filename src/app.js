import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path"

import userRoute from "./routes/user.js"
import messageRoute from "./routes/messages.js"

dotenv.config({ path: path.join(".env") })

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
// app.use(cors())

app.use("/users", userRoute)
app.use("/messages", messageRoute)

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on port ${process.env.PORT}!`)
    )
  })
  .catch((err) => {
    console.log(err.message)
  })
