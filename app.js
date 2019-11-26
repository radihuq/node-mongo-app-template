const express = require('express');
const app = express();
const cors = require('cors');

const SERVER_PORT = 3000;

//Middlewares
app.use(cors());
app.use(express.json());

//Import Routes
const exampleRoute = require('./routes/Example');
app.use(`/api/example`, exampleRoute); // localhost:3000/api/example/

//Start Server
const os = require('os');

const interfaces = os.networkInterfaces();
const addresses = [];
for (let k in interfaces) {
    for (let k2 in interfaces[k]) {
        let address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

app.listen(SERVER_PORT, () => {
    console.log(`Server up and running on port [${SERVER_PORT}] (Network IP: ${addresses[0]})`);
});