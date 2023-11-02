const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require("morgan");
const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/authRoute');
// db connection
dbConnect();

const app = express();
app.use(express.json()); // to parsing req.body
app.use(morgan("dev"));  // morgan middelware for logger

const port = process.env.PORT || 3000 ;

app.use('/api/user',authRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
