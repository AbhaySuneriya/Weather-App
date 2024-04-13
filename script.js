
        const apiKey = "92af710b6b861d481b9bad525fe034c3";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");


        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "Assest/cloud.png ";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "Assest/sun.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "Assest/rain.png";
            } else if (data.weather[0].main == "Drizzel") {
                weatherIcon.src = "Assest/drizzel.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "Assest/fog.png";
            }
        }
        searchBtn.addEventListener('click', () => {
            checkWeather(searchBox.value);
        })
