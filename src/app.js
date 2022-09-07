import userRoute from './routers/user.js';
import accountRoute from './routers/account.js';
import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient, ServerApiVersion } from 'mongodb';
import  mongoose from 'mongoose';

const PORT = 3001
const app = express();

app.use(bodyParser.json())

app.use('/users', userRoute)
app.use('/acount', accountRoute)

const uri = "mongodb+srv://tiendat1:datdeptraiqua@appmess.znswhba.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    if (err) throw err
    const collection = client.db("test").collection("devices");
    console.log('is connect datdeptraiqua');
    // perform actions on the collection object
    client.close();
  });
// async function connectDB() {
//     try {
//         await mongoose.connect(url);
//     } catch (error) {
//         console.error(error);
//     }
// }

//connectDB();

// app.get('/',(req, res)=>{
//     res.send('Hello a tien dat')
// })

// app.listen(8080,()=>{console.log('listen on port 3001')})
