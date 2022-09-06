import userRoute from './routers/user.js';
import accountRoute from './routers/account.js';
import express from 'express';
import bodyParser from 'body-parser';

const PORT = 3001
const app = express();

app.use(bodyParser.json())

app.use('/users', userRoute)
app.use('/acount', accountRoute)

app.get('/',(req, res)=>{
    res.send('Hell a tien dat')
})

app.listen(PORT,()=>{console.log('listen on port 3001')})
