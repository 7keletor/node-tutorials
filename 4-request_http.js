const request = require('request')

// Weatherstack API
const url = 'http://api.weatherstack.com/current?access_key=3836e8d72fd42b225784e2f06df501d7&query=25.3176,82.9739&units=m'

// request ( {url:url} , (error,response) => {
//     const data= JSON.parse(response.body)
//     console.log(data.current)
// })
request({ url: url, json: true }, (error, response) => { //see how we no longer need to parse the data
    //since we have set the json object property to be true
    if (error) //low level error due to no internet connection
        console.log("Unable to connect to weatherstack")
    else if (response.body.error) //error due to missing location coordinates
        console.log("Unable to find location")
    else {
        const data = response.body
        console.log(data)
        // console.log(data.location) //location is one of the properties present in the object
        // console.log(data.location.region) //region is a sub property of the location object
        console.log("The temperature is " + data.current.temperature)
        console.log("Weather description:" + response.body.current.weather_descriptions[0])
    }
})

// MapboxAPI
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiN2tsdHIiLCJhIjoiY2tyYnJrNGd2MXVleTJxbHA2a2s4dTlxdSJ9.uuGhxaoHFbddpf8i55em-Q&limit=1'
request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to mapbox")
    }
    else if (response.body.features.length ===0 ) {
        console.log("Unable to find location")
    }
    else {
        const data = response.body
        console.log(data)
        console.log("The latitude is " + response.body.features[0].center[1])
        console.log("The longitude is " + response.body.features[0].center[0])
    }
})

//using callbacks with API present in geocode.js in weather-app

