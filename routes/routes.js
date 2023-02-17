const express = require('express');
const { appendFile } = require('fs');
const path = require('path');
const router = require('express').Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('index.html');
}) 

module.exports = router;