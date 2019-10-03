const express = require('express')
const path = require('path')
const fs = require('fs')
const router = express.Router();

router.get('/', (req, res) => {
    let raw = fs.readFileSync(path.join(__dirname, '../batsmen.json'))
    let data = JSON.parse(raw)
    res.json({
        data
    })
})

module.exports = router;