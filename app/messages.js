const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();

router.get('/',(req,res) => {
    const messages = fileDb.getItems();
    res.send(messages);
});

router.get('/:id', (req, res)=>{
    const message = fileDb.getItemById(req.params.id);
    res.send(message);
});

router.post('/', (req, res)=>{
    fileDb.addItem(req.body);
    res.send(req.body);
});

module.exports = router;