const apiRequest = require("request");
const date = require('date-and-time');
const visitorsModel = require('../models/visitors.model');

insertData = (req, res) => {
    let query = {
        loginId: req.query.loginId
    }
    // console.log("query", query);

    visitorsModel.find(query, (err, docs) => {
        res.send({
            status: true,
            data: docs
        })
    })
}




module.exports = {
    insertData: insertData,
}