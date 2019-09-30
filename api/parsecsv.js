const dataForge = require('data-forge');
require('data-forge-fs');
const path = require('path');

let loc = path.join(__dirname, '../public/sachin_data_cleaned.csv')

let data = () => {
    console.log('Invoked')
    return dataForge.readFileSync(loc).parseCSV().parseInts(['batting_score', 'not_out', 'wickets', 'runs_conceded',
        'catches', 'year', 'month', 'day', 'chase'
    ]).parseDates('date')
}

// let data = () => {
//     return new Promise((resolve, reject) => {
//         dataForge.readFile(loc).parseCSV()
//             .then(df => {
//                 df = df.parseInts(['batting_score', 'not_out', 'wickets', 'runs_conceded',
//                     'catches', 'year', 'month', 'day', 'chase'
//                 ]).parseDates('date')
//                 resolve(df)
//             })
//             .catch(err => reject(err))
//     })
// }

module.exports = data;