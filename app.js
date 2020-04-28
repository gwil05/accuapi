//dom manipulation
const cityForm = document.querySelector('form');
const card = document.querySelector('.app-container');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {

    //destructure prperties for data 
    const {cityDetails, weather} = data;

    //update new details
    details.innerHTML = `
            <h5>${weather.WeatherText}</h5>
            <h1 class="city">${cityDetails.EnglishName}</h1>
            <h2 class="temp">${weather.Temperature.Imperial.Value}</h2>
            <div class="temp-indicator">&deg;F</div>
            `;

//change the icon image
const iconSrc = `https://apidev.accuweather.com/developers/Media/Default/${weather.WeatherIcon}.png`;
icon.setAttribute('src', iconSrc);


 //switch our bg based on time of day 
//  let timeSrc = null;
//  if(weather.IsDayTime){
//      timeSrc = 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&w=1000&q=80';
//  } else {
//      timeSrc = 'https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?ixlib=rb-1.2.1&w=1000&q=80';
//  }
//  time.setAttribute('src', timeSrc);

//removing a class 
// if(card.classList.contains('gone')){
//     card.classList.remove('gone');
//     }

 };

const updateCity = async (city) => {

const cityDetails = await getCity(city);
const weather = await getWeather(cityDetails.Key);

return {
    cityDetails: cityDetails,
    weather: weather
    };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    //taking our city value from our form 
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update ui with new city 
    //city form-input passes through here 
updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});