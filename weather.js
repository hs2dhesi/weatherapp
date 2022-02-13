let weather = {
    "apiKey": "3a94dc1b1a0f39cc65a398a178254bc1", //setting up our apikey
    fetchWeather: function (city) {
         fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" +
              city +"&units=metric&appid=" +this.apiKey)
        
        .then((response) => response.json()) //typical fetch stuff
        .then((data) => this.displayWeather(data)); //changed console.log to this.display

    
    },
    displayWeather: function(data) {
        const { name } = data
        const { icon, description} = data.weather[0]; //because it's an array we can put [0] it takes the first element
        const { temp, humidity } = data.main;
        const {speed} = data.wind
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name; //displaying the city
        document.querySelector(".temp").innerText = temp + "° Celsius";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %"
        document.querySelector(".wind").innerText = "Wind Speed " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value); //creating weather function to get content
    }
};

document.querySelector(".search button").addEventListener("click", function () { //making it search when you press the search button
    weather.search();
});

document.querySelector(".search-bar").addEventListener('keypress', function (e) { //making it search when you press enter
    if (e.key === 'Enter') {
        weather.search();
    }
});

weather.fetchWeather("Toronto");




