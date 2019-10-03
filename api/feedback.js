const express = require('express');
const router = express.Router()

router.post('/response', (req, res) => {
    const fs = req.app.locals.fs;

    fs.collection('feedback').add({
            response: req.body.response
        })
        .then(docRef => {
            res.json({
                data: docRef.id
            })
        })
        .catch(error => {
            res.json({
                error
            })
        })
})

router.get('/', (req, res) => {
    const fs = req.app.locals.fs;

    fs.collection('feedback')
        .get()
        .then(snapshot => snapshot.docs.map(doc => doc.data()))
        .then(result => {
            res.json({
                result
            })
        })
        .catch(error => {
            throw error
        })
})

module.exports = router;