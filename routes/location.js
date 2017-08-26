const express = require('express');
const router = express.Router();

const getJson = require('../utils/getJson');

function getWundergroundAQURL(cityQuery){
    return `http://autocomplete.wunderground.com/aq?query=${cityQuery}&h=0`;
}

let cityQuery;
let limit; 

router.get('/', 
    function(req, res, next) {
        
        cityQuery = req.query.city;
        limit = req.query.limit;

        cityQuery ? next() : res.status(400).send("city parameter is required.");
    },
    function(req, res, next) {

        getJson(getWundergroundAQURL(cityQuery))
        .then(response=>{
            let cities = response.RESULTS
                        .filter(r=>r.type==="city")
                        .map(r=>{return {name: r.name, coords: r.ll.replace(" ", ",")}})
                        .sort((r1, r2)=>r1.name.indexOf(',')-r2.name.indexOf(','));
            if(limit){
                res.send(cities.slice(0, limit));
            }else{
                res.send(cities);
            }
        })
        .catch(err=>{
            console.log(err);
            res.status(500).end();
        })
    });
    
module.exports = router;
