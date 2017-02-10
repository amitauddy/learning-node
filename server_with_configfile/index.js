'use strict';

const http = require('http');
const express = require('express');
const fs = require('fs');

const configJson = fs.readFileSync("./server_config/config.json");
const config = JSON.parse(configJson);

const app = express();
app.use(express.static(config.webServer.staticFolder));
const httpServer = http.createServer(app);

httpServer.listen(config.webServer.port , (err) => {
    if (err) {
        console.log("error creating server!");
        return;
    }
    console.log(`server listening on port ${config.webServer.port}...........`);
});