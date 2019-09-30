const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    let df = req.app.locals.data
    let query_param = req.params.id
    let series = df.getSeries(query_param)
    let data = {}
    let match_count = {}
    for (const i of series) {
        if (match_count.hasOwnProperty(i)) {
            match_count[i]++;
        } else match_count[i] = 1
    }

    // const pivotted = df.pivot('opposition', {
    //     ColumnSum: series => series.sum(),
    //     ColumnAverage: series => series.average()
    // })
    // console.log(pivotted.toString())

    let sum = df.groupBy(row => row[query_param])
        .select(group => ({
            opposition: group.deflate(row => row[query_param]).first(),
            batting_score: group.deflate(row => row.batting_score).sum()
        })).inflate().toArray()
    data['sum'] = sum
    data['match_count'] = match_count
    res.json({
        data
    })
})

// router.get('/sum/:id', (req, res) => {
//     let df = req.app.locals.data
//     let query_param = req.params.id
//     let data = df.groupBy(row => row[query_param])
//         .select(group => ({
//             opposition: group.deflate(row => row[query_param]).first(),
//             batting_score: group.deflate(row => row.batting_score).sum()
//         })).inflate().toArray()
//     res.json({
//         data
//     })
// })

module.exports = router;