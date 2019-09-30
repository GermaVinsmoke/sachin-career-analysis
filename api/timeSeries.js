const express = require('express');
const router = express.Router()

router.get('/:id', (req, res) => {
    let query_param = req.params.id
    let df = req.app.locals.data

    df = df.renameSeries({
        [query_param]: 'y',
        'date': 'x'
    })

    let data = df.subset(['x', 'y']).toArray()
    let prev = 0;
    data.forEach(row => {
        row.x = new Date(row.x).toLocaleDateString()
        row.y = row.y + prev
        prev = row.y
    })

    res.json({
        data
    })
})

module.exports = router;