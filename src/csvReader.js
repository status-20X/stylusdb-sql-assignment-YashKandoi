const fs= require('fs');
const csv = require('csv-parser');

function readCSV(filepath){
    const results = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filepath)
            .pipe(csv())
            .on('data',(data) => results.push(data))
            .on('end',() => {
                resolve(results);
            })
            .on('error',(error)=>{
                reject(error);
            });
    });
}

module.exports = readCSV;
