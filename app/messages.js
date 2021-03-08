const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();
router.use(express.json());

router.get('/',(req,res) => {
    const messages = fileDb.getItems();
    res.send(messages);
});

router.post('/', (req, res)=>{
    fileDb.addItem(req.body);
    res.send(req.body);
});

module.exports = router;