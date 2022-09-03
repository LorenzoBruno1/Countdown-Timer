const hrsEL = document.getElementById('hrs');
const minEL = document.getElementById('min');
const secEL = document.getElementById('sec'); 
const acTemp = document.getElementById('tempC');
const minTemp = document.getElementById('tempMin-j');
const maxTemp = document.getElementById('tempMax-j');
const descEL = document.getElementById('descC');

function countdown(){
    var today = new Date()
    // var completeHour = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var hrs = today.getHours() + " : ";
    var min = today.getMinutes() + " : ";
    var sec = today.getSeconds();
    
    hrsEL.innerHTML = format(hrs);
    minEL.innerHTML = format(min);
    secEL.innerHTML = format(sec);

}

function format(time){
     return time <10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000)

fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=f425626dbe48803dade3cabc56d4db27")
.then(response => response.json())
.then(data => {
    console.log(data)
    var tempValue = celcius(data['main']['temp']) + "°";
    var maxValue = celcius(data['main']['temp_max']) + "°";
    var minValue = celcius(data['main']['temp_min']) + "°";
    var descValue = data['weather'][0]['description'];

    acTemp.innerHTML = tempValue;
    minTemp.innerHTML = minValue;
    maxTemp.innerHTML = maxValue;
    descEL.innerHTML = descValue;
})
.catch(err => alert ("Wrong city name!"))

function celcius(value){
    var valueCelcius = value - 273.15;
    return Math.round(valueCelcius);
}