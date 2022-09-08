const mongoose = require('mongoose');

// CONNECT
const dbConection = async() => {

    try {

        const connection = await mongoose.connect(process.env.DB_CNN);

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la Database');
    }

};

module.exports = { dbConection };