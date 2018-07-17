var requestURL = 'http://openweathermap.org/data/2.5/weather?zip=55333,us&units=imperial&appid=b6907d289e10d714a6e88b30761fae22';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL,'jsonp');
    request.responseType = 'json';
    
    request.onload = function() {
      var obj = request.response;
      getWeather(obj);
     
    
    }
request.send();

function findWindChill(){
	var windChill;
	var low = parseFloat(document.getElementById('hi').innerHTML);
	var hi = parseFloat(document.getElementById('low').innerHTML);
	var average = (hi + low) / 2;
	
	var windSpeed = parseFloat(document.getElementById('windSpeed').innerHTML);
	
	
	//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 
	
	
	var windChillUnfiltered = 35.74 + .6125 * average + Math.pow(windSpeed, 0.16) * [.4275 * average -35.75];
	windChill = Math.round(windChillUnfiltered * 10)/10 ;
	
	console.log(average);
	
	 document.getElementById('windChill').innerHTML = "Feels Like: " + windChill + " &deg;F" ;
	
}


 function getWeather(obj) {
	 var section = document.querySelector('section');
	
	if(obj){
	var main  = obj.main;
	var wind = obj.wind;
	var weather= obj.weather[0];
	
	document.getElementById('windSpeed'). innerHTML = wind.speed;
	document.getElementById('hi').innerHTML = main.temp_max; 
    document.getElementById('low').innerHTML = main.temp_min;
	document.getElementById('weatherIcon').src = "http://openweathermap.org/img/w/"+weather.icon+".png";
	document.getElementById('currentCondition').innerHTML = weather.main;
	}
 }
 