(function updateWeather() {
    var apiKey = '47b4d3ad1bc69c459f39118597a607f7';
    var cityId = 1273865;
    var units = "metric";

    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "id=" + cityId.toString() +
        "&units=" + units +
        "&APPID=" + apiKey;

    httpGetAsync(url, setWeather);

    setTimeout(updateWeather, 1800);
})();

function setWeather(res) {
    setClass('weather-icon', getWeatherIcon(res.weather[0].id));
    setClass('wind-icon', "wi wi-wind towards-" + Math.ceil(res.wind.deg) + "-deg");
    setHtml('weather-temp', Math.ceil(res.main.temp).toString());
    setHtml('weather-description', res.weather[0].description);
    setHtml('wind-speed', Math.ceil(res.wind.speed) + " km/h");
}

function setHtml(id, content) {
    document.getElementById(id).innerHTML = content;
}

function setClass(id, className) {
    document.getElementById(id).className = className;
}

function getWeatherIcon(id) {
    var keyPrefix = "wi-owm-";
    var keyAffix = "";

    var timeOfDay = moment().format('A');
    if (timeOfDay == "AM") {
        keyAffix = "day";
    } else {
        keyAffix = "night";
    }

    var iconKey = keyPrefix + keyAffix + "-" + id;

    var iconValuePrefix = "wi wi-";
    var iconValueSuffix = iconMap[iconKey];

    return iconValuePrefix + iconValueSuffix;
}

function httpGetAsync(url, callback) {
    //callback(weatherData);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
