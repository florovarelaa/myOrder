const express = require ('express');
const expressPort = process.env.PORT || 9000;
const nestPort = process.env.PORT || 9001;
const adonisPort = process.env.PORT || 9002;


/**
 * express
 */
const app = express();

app.get('/', (req, res) => {
    res.send('express server running');
  });

app.listen(expressPort, err => {
    if (err) {
        throw new Error(err)
    } else {
        console.log(`Server running on ${expressPort}`)
    }
})