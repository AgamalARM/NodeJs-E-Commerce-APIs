const express = require('express');
const dotenv = require('dotenv').config();
//const dbConnect = require('./config/dbConnect');

const app = express();

const port = process.env.PORT || 3000 ;
//dbConnect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
