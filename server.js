const express = require('express');
const { exec } = require('child_process');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/screenshots', express.static('screenshots'))

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.post('/fetch/',function (req, res) {
  console.log(req.body)

var yourscript = exec('node fetch.js '+req.body.url+' '+req.body.screenshot,{maxBuffer: 1024 * 5000},
        (error, stdout, stderr) => {
            res.send(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

