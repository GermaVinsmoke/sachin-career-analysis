const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const firebase = require('firebase')
const dataForge = require('data-forge');
require('data-forge-fs');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.PORT || 5000;

const basic = require('./api/basicInfo.js');
const timeSeries = require('./api/timeSeries.js');
const pieData = require('./api/pieData.js');
const match = require('./api/barData.js');
const runs = require('./api/lineData.js');
const batsmen = require('./api/batsmanComparison.js');
const feedback = require('./api/feedback.js')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

let loc = path.join(__dirname, './sachin_data_cleaned.csv')
app.locals.data = dataForge.readFileSync(loc).parseCSV().parseInts(['batting_score', 'wickets', 'runs_conceded',
    'catches', 'year', 'month', 'day'
]).parseDates('date')


const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_STORAGE_ID,
    appId: process.env.APP_ID
};

firebase.initializeApp(config);
app.locals.fs = firebase.firestore();

// API Routes
app.use('/api/basic', basic)
app.use('/api/timeSeries', timeSeries)
app.use('/api/pieData', pieData)
app.use('/api/match', match)
app.use('/api/runs', runs)
app.use('/api/batsmen', batsmen)
app.use('/api/feedback', feedback)
app.use('/api/images', express.static(path.join(__dirname, 'public/images')))

app.use(express.static(path.join(__dirname, 'client/build')))

if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'))
})

app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
})