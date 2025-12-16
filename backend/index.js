const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv = require('dotenv')
const userRoute= require('./Routes/userRoutes');
dotenv.config();



const app =express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DBURL)
.then(() => console.log("MongoDB Connected"))
.catch((err)=> console.error("MongoDB Connection Error:",err));


app.use('/users',userRoute)


app.listen(8080,()=>{
console.log("Server Started");
}
)

