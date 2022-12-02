const express = require('express');
const log = require('../logger');

module.exports = function (db) {

    const router = express.Router();

    router.get('/:num1/:num2', async (req, res, next) => {

        res.json({
            sum: parseInt(req.params.num1) + parseInt(req.params.num2)
        });

    });

    return router;

}