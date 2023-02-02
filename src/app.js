import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path"
import http from 'http'
import cors from 'cors'

import userRoute from "./routes/user.js"
import messageRoute from "./routes/messages.js"
import auth from './routes/auth.js'
import { Server } from 'socket.io'

dotenv.config({ path: path.join(".env") })

const app = express()
// Create server 
const server = http.createServer(app);
// const io = new Server(server);
// io.close();
app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
// app.use(cors())

app.use("/users", userRoute)
app.use("/messages", messageRoute)
app.use("/auth", auth)
app.get("/", (req, res)=> {
  return res.send('Hello world')
})

async function connectdb() {
  try {
   await mongoose.connect(process.env.CONNECTION_URL)
       app.listen(process.env.PORT, () =>
      console.log(`Server is running on port ${process.env.PORT}!`)
    )
  } catch {
    console.log('ko connect');
  }
  
}

connectdb()
// mongoose
//   .connect(process.env.CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(process.env.PORT, () =>
//       console.log(`Server is running on port ${process.env.PORT}!`)
//     )
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// app.listen(5000, () => {
//   console.log('listening on *:3000');
// });