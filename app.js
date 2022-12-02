const express = require("express");
const log = require('./logger');

module.exports = function () {

    const app = express()

    app.use(express.json())

    app.use(function (req, res, next) {
        log.info(`${req.method} ${req.originalUrl}`);
        log.debug(`${req.method} ${req.ip} ${req.originalUrl}`);
        next();
    })

    app.use((err, req, res, next) => {
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            log.error("syntax error " + err);
            return res.status(400).send({ status: "Failed", error: err.message});
        }
        next();
    });
    
    app.get('/', (req, res) => {
        res.send('Welcome to sample-nodejs API service!')
    });

    return app;

}