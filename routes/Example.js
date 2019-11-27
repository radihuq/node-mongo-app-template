const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ExampleModel = require('../models/ExampleModel');

router.get('/', async (req, res) => {
    const example = new ExampleModel({
        title: 'Example',
        description: 'This is the description'
    });

    try {
        const savedExample = await example.save();
        res.status(200).json({message: `Received GET request`, response: savedExample});
    } catch(err) {
        console.log(err);
        res.status(400).json({message: `error`, error: err});
    }

});

router.post('/', async (req, res) => {

    try {
        console.log(req.body);
        res.status(200).json({message: `Received POST request`});
    } catch(err) {
        console.log(err);
        res.status(400).json({message: `error`, error: err});
    }

});

module.exports = router;