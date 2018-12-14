//Springfield
	
	function startSpringfield(){
	var requestURLSpringfield = 'https://openweathermap.org/data/2.5/weather?q=Springfield,us&units=imperial&appid=b6907d289e10d714a6e88b30761fae22';
    var requestSpringfield = new XMLHttpRequest();
    requestSpringfield.open('GET', requestURLSpringfield,'jsonp');
    requestSpringfield.responseType = 'json';
    
    requestSpringfield.onload = function() {
      var Sobj = requestSpringfield.response;
      getSpringfieldWeather(Sobj);
     
    
    }
requestSpringfield.send();
	}
	function getSpringfieldWeather(Sobj) {
	 var section = document.querySelector('section');
	
	if(Sobj){
	var main  = Sobj.main;
	var wind = Sobj.wind;
	var weather= Sobj.weather[0];
	document.getElementById('cityTitle').innerHTML = Sobj.name;
	document.getElementById('windSpeed').innerHTML = wind.speed;
	console.log(wind.speed);
	document.getElementById('hi').innerHTML = main.temp_max; 
    document.getElementById('low').innerHTML = main.temp_min;
	document.getElementById('weatherIcon').src = "http://openweathermap.org/img/w/"+weather.icon+".png";
	document.getElementById('currentCondition').innerHTML = weather.main;
	}
 }