const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let df = req.app.locals.data;
    let match_count = df.count();

    let batting_score = df.getSeries('batting_score');
    let wickets = df.getSeries('wickets');
    let catches = df.getSeries('catches');
    let wicket_count = wickets.sum();
    let catch_count = catches.sum();
    let total_runs = batting_score.sum();
    let highest_run = batting_score.max();
    let half_century_count = 0;
    let century_count = 0;
    let first_match = df.subset(['opposition', 'date', 'ground']).first()
    let last_match = df.subset(['opposition', 'date', 'ground']).last()


    batting_score.forEach(val => {
        if (val >= 50 && val < 100) half_century_count++;
        else if (val >= 100) century_count++;
    });

    res.json({
        match_count,
        total_runs,
        half_century_count,
        century_count,
        highest_run,
        wicket_count,
        catch_count,
        first_match,
        last_match
    });
});

module.exports = router;