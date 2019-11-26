const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    try {
        res.status(200).json({message: `Received GET response`});
    } catch(err) {
        console.log(err);
        res.status(400).json({message: `error`, error: err});
    }

});

router.post('/', async (req, res) => {

    try {
        console.log(req.body);
        res.status(200).json({message: `Received POST response`});
    } catch(err) {
        console.log(err);
        res.status(400).json({message: `error`, error: err});
    }

});

module.exports = router;