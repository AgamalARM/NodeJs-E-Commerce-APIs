const {default: mongoose} = require('mongoose');

const dbConnect = () => {
    try {
        const conn = mongoose.connect();
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Database Error');
    }
};

module.exports = dbConnect;