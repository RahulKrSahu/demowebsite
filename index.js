require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Welcome to my website</h2>');
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening at PORT ${process.env.PORT}`);
});