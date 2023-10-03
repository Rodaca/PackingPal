import express from 'express';
import dotenv from 'dotenv';

import router from './routes/router.js';



import cors from 'cors';


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());


app.use('/api', router);


app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})