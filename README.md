# WeatherWidget
A simple widget that fetches and displays weather data for a given location. 

## TODO
- [ ] Angular Front End
  - [x] location selection component
    - [x] search field that automatically updates matches
    - [x] button list to select location
  - [x] weather data component
    - [x] button showing current location
      - [x] show location selection component on click to update location
    - [x] show data
      - [x] date
      - [x] condition
      - [x] temperature
      - [x] precipitation
      - [x] wind
    - [x] background image, background color & font color dependent on weather condition
  - [x] location service
    - [x] http request to fetch location data
  - [x] weather service
    - [x] http request to fetch weather data
  - [ ] animation to be shown when data is updating
- [x] Express Back End
  - [x] location
    - [x] call to [Weather Underground AutoComplete API](https://www.wunderground.com/weather/api/d/docs?d=autocomplete-api) to fetch location data
  - [x] weather
    - [x] call to [Weather Underground Weather API](https://www.wunderground.com/weather/api/d/docs?d=index) to fetch weather data

## Enhancements to Consider
- [ ] investigate CORS utilization of API (is own backend even necessary?)
- [ ] map (Google Maps) to select location 

## Installation
1) clone this repository
2) [Sign up for a Weather Underground key](https://www.wunderground.com/weather/api/d/docs?d=index)
3) Update routes/weather.js to use your secretKey (In this repo I require my own key from a file that I have not uploaded)
4) build using >bg build
5) servce using >npm start
6) Open the browser to http://localhost:3000/

## Expected Displays
![unknown location](https://github.com/albertpatterson/screenshots/blob/master/weatherWidget/unknown.png)
![set location](https://github.com/albertpatterson/screenshots/blob/master/weatherWidget/location.png)
![rainy weather](https://github.com/albertpatterson/screenshots/blob/master/weatherWidget/rainy.png)
![stormy location](https://github.com/albertpatterson/screenshots/blob/master/weatherWidget/stormy.png)
![sunny location](https://github.com/albertpatterson/screenshots/blob/master/weatherWidget/sunny.png)
![cloudy location](https://github.com/albertpatterson/screenshots/blob/master/weatherWidget/cloudy.png)
