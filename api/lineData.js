const express = require('express')
const router = express.Router()

router.get('/:year', (req, res) => {
    let df = req.app.locals.data;
    let query_param = req.params.year;
    let data;
    if (query_param === 'all') {
        data = df.groupBy(row => row.year)
            .select(group => ({
                year: group.deflate(row => row.year).first(),
                batting_score: group.deflate(row => row.batting_score).sum()
            })).inflate().toArray();
    } else {
        let filtered_data = df.where(row => row.year === parseInt(query_param))
        data = filtered_data.groupBy(row => row.month)
            .select(group => ({
                date: group.deflate(row => row.date).first(),
                batting_score: group.deflate(row => row.batting_score).sum()
            })).inflate().toArray()
    }

    res.json({
        data
    })
})

module.exports = router;