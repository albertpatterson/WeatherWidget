const router = require('express').Router();

const getJson = require('../utils/getJson');
const secretKey = require('../../private/wundergroundSecretKey');

function getWeatherURL(coords){
    return `http://api.wunderground.com/api/${secretKey}/conditions/q/${coords}.json`
}

let coords;
router.get('/', 
    (req, res, next)=>{coords = req.query.coords; coords ? next() : res.status(400).send("coords parameter is required.");},
    function(req, res, next) {

        getJson(getWeatherURL(coords))
        .then(response=>{
            let data = response.current_observation;
                       
            let weatherDate = {
                date: data.local_time_rfc822.match(/.* (\d{1,2} \w{3,4} \d{4}).*/)[1],
                weatherCondition: data.weather,
                temperature: data.temp_f+" F",
                precipitation: data.precip_today_in+ " in",
                wind: data.wind_mph+" mph"
            }
            
            switch(data.weather.toLowerCase()){
                case "rain":
                case "overcase":
                    weatherDate.weatherCondition = "rainy";
                    break;
                case "mostly cloudy":
                case "partly cloudy":
                    weatherDate.weatherCondition = "cloudy";
                    break;
                case "thunderstorm":
                    weatherDate.weatherCondition = "stormy";
                    break;
                default:
                    weatherDate.weatherCondition = "sunny";
                    break;
            }

            res.send(weatherDate);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).end();
        })
    });

module.exports = router;