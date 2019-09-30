const express = require('express');
const router = express.Router()

router.get('/:id', (req, res) => {
    let df = req.app.locals.data;
    let query_param = req.params.id
    let filtered_data = df.where(row => row.match_result === 'won')
    let new_data = filtered_data.groupBy(row => row[query_param])
        .select(group => ({
            [group.deflate(row => row[query_param]).first()]: group.deflate(row => row.match_result).count()
        })).inflate().toArray()
    let data = {}
    for (const [key, value] of Object.entries(new_data)) {
        for (const [key2, val2] of Object.entries(value)) {
            data[key2] = val2
        }
    }

    res.json({
        data
    })
})

module.exports = router;