//Greenville
var requestURLGreenville = 'https://openweathermap.org/data/2.5/weather?q=Greenville,us&units=imperial&appid=b6907d289e10d714a6e88b30761fae22';
    var requestGreenville = new XMLHttpRequest();
    requestGreenville.open('GET', requestURLGreenville,'jsonp');
    requestGreenville.responseType = 'json'
          
    requestGreenville.onload = function() {
      var Gobj = requestGreenville.response;
      getGreenvilleWeather(Gobj, obj);
     }

	 requestGreenville.send();

function getGreenvilleWeather(Gobj, obj) {
	 var section = document.querySelector('section');
	
	if(Gobj){
		console.log(obj);
		console.log(Gobj);
	var main  = Gobj.main;
	var wind = Gobj.wind;
	var weather= Gobj.weather[0];
	var events = Gobj.
	document.getElementById('cityTitle').innerHTML = Gobj.name;
	document.getElementById('windSpeed'). innerHTML = wind.speed;
	document.getElementById('hi').innerHTML = main.temp_max; 
    document.getElementById('low').innerHTML = main.temp_min;
	document.getElementById('weatherIcon').src = "http://openweathermap.org/img/w/"+weather.icon+".png";
	document.getElementById('currentCondition').innerHTML = weather.main;
	}
 }
 function getTownData(){
 var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var obj = request.response;
      console.log(obj);
     test(obj);
    }
	request.send();
	
function test(obj) {
	 var section = document.getElementById('events');
	
	if(obj != null){
	var towns = obj.towns;
    var greenville = towns[2];
	console.log(greenville);
	
 }
 }