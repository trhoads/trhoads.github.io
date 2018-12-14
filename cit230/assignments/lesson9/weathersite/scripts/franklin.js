//Franklin
function startFranklin(){
var requestURLFranklin = 'https://openweathermap.org/data/2.5/weather?q=Franklin,us&units=imperial&appid=b6907d289e10d714a6e88b30761fae22';
    var requestFranklin = new XMLHttpRequest();
    requestFranklin.open('GET', requestURLFranklin,'jsonp');
    requestFranklin.responseType = 'json';
    
    requestFranklin.onload = function() {
      var Fobj = requestFranklin.response;
      getFranklinWeather(Fobj);
     
    
    }
requestFranklin.send();
  }



 function getFranklinWeather(Fobj) {
	 var section = document.querySelector('section');
	
	if(Fobj){
	var main  = Fobj.main;
	var wind = Fobj.wind;
	var weather= Fobj.weather[0];
	
	document.getElementById('cityTitle').innerHTML = Fobj.name;
	document.getElementById('windSpeed').innerHTML = wind.speed;
	console.log(wind.speed);
	document.getElementById('hi').innerHTML = main.temp_max; 
    document.getElementById('low').innerHTML = main.temp_min;
	document.getElementById('weatherIcon').src = "http://openweathermap.org/img/w/"+weather.icon+".png";
	document.getElementById('currentCondition').innerHTML = weather.main;
	}
	
	
 }