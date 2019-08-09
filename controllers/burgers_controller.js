var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res){
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render('index', handlebarsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
        //check index for correct name value
    ], function(result) {
        res.json({ id: result.insertId });
    });
});