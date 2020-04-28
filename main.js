// window.addEventListener('load', () => {
// let long;
// let lat;

// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(position => {
//         long = position.coords.longitude;
//         lat = position.coords.latitude;
//         console.log(position);
//     });

// }else {
//     h1.textContent = "Allow geolocation to recieve local weather data"
// }
// });

//icon  img src="/developers/Media/Default/WeatherIcons/02-s.png"

// const proxy = 'http://cors-anywhere.herokuapp.com/';

const key = 'YCdVGusFi5EZZLbJAGAQGyEvhriiAmXA';

const getWeather = async(cityKey) => {

const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
const query = `${cityKey}?apikey=${key}`;

const response = await fetch(base + query);
const data = await response.json();

return data[0];

};

//get city info from api
const getCity = async (city) => {

const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const query = `?apikey=${key}&q=${city}`;

const response = await fetch(base + query);
const data = await response.json();

return data[0];

}

// getCity('chicago').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));

// getWeather(348308);






