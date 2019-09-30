const http = require('http')
const path = require('path')
const express = require('express');
const app = require('./app')
const port = process.env.PORT || 5000;
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'client/build')))

if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'))
})

server.listen(port)