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

var requestURL = ' http://openweathermap.org/data/2.5/weather?q=Franklin&appid=b6907d289e10d714a6e88b30761fae22';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var obj = request.response;
      test(obj);
     
    }
    


 function test(obj) {
	 var section = document.querySelector('section');
	
	if(obj){
	var weather  = obj.main;
	var wind = obj.wind;
	}
 }
 }
 }}
	