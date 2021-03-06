const express = require('express');
const fileDb = require('./fileDb');
const app = express();
app.use(express.json());
const messages = require('./app/messages');

fileDb.init();

const port = 8000;

app.use('/messages', messages);

app.listen(port, () => {
    console.log('server started on port' + port);
}); 