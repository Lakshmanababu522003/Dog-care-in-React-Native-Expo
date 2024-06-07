const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const appointRouter = require('./routes/appointment')
const adminRouter = require('./routes/admin')





app.use(express.json());
app.use(cors());

app.use('/users' , userRouter);
app.use('/appoint' , appointRouter);
app.use('/admin' , adminRouter);







mongoose.connect('mongodb://127.0.0.1:27017/dogcare')
  .then(() => {
    console.log('Connected to the database');
    // Do something after successful connection
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    // Handle the connection error
  });

app.listen(4000,() =>{
    console.log('server start');
});