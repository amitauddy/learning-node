'use strict';

const http = require('http')
const express = require('express')

const app = express();
app.use(express.static('./templates'))
const httpServer = http.createServer(app);

httpServer.listen(3000, function(err){
    if (err) {
        console.log("error creating server!");
        return;
    }
    console.log("server listening on port 3000...........");
});