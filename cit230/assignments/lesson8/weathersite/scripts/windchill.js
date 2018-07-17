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