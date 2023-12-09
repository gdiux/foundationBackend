// ENV
require('dotenv').config();
const path = require('path');

// EXPRESS - CORS
const express = require('express');
const cors = require('cors');

// DATABASE
// const { dbConection } = require('./databases/config');

// SERVER EXPRESS
const app = express();

// CORS
app.use(cors());

// READY BODY
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

// CONNECT DATABASE
// dbConection();

// PUBLIC FOLDER
app.use(express.static('public'));

// RUTAS
// app.use('/api/user', require('./routes/user.routes'));

// SPA
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// LISTEN
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto: ', process.env.PORT);
});