var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Heroes = require('../models/heroModel.js');

// get all heros
router.get('/', function(req, res) {
    Heroes.find({}, function(err, heroesResults) {
        if (err) {
            console.log('error in router.get:', err);
            res.sendStatus(500);
        } else {
            console.log('heroesResults: ', heroesResults);
            res.send(heroesResults);
        }
    }); //end Heroes.find
}); //end router.get

// post to create a new hero
router.post('/', function(req, res) {
    console.log('req.body in router.post: ', req.body);
    var sentData = req.body;

    var newHero = new Heroes({
        alias: sentData.alias,
        first_name: sentData.first_name,
        last_name: sentData.last_name,
        city: sentData.city,
        power_name: sentData.power_name
    }); //end newPet

    newHero.save(function(err) {
        if (err) {
            console.log('error saving hero: ', err);
            res.sendStatus(500);
        } else {
            console.log('a new hero was added!');
            res.sendStatus(201);
        }
    }); //end newHero.save
}); //end router.post

module.exports = router;
