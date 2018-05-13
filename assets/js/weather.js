//weather app javascript/ajax/jquery

//button to initiate get against API.
$("i").on("click", function(data){
	var location = $("input").val();
	getWeather(location);
	getlongLat();
	

});

function getWeather(city){
	//making API Call with key appended.
$.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=9ea2203f896a7121060a24be0056ac22", function(data){
	$(".location h1").html(data.name);
	
	//change celsius to fahrenheit: Refactored:
	var cel = Math.round(data.main.temp - 273);
	var degFixed = $(".temp span").html((cel*1.8+32).toFixed());
	// var decNotFixed = $(".temp span").html((data.main.temp * 9/5 -459.67).toFixed(0));

	$(".condition h1").html(data.weather[0].description);
	$(".condition span:first").html(data.weather[0]);
	
	var lat = data.coord.lat;
	var lng = data.coord.lon;
	
	getlongLat(lat,lng);
});
}

//get the long/lat of location
function getlongLat(lat,lng){   //How to get local time based off of long/lat, not current location.
	var longitude = lng;
	var latitude = lat;

	var currentTime = $.now();
	var maxDate = new Date(currentTime);
	var currentDate = maxDate.toString();
	$(".dateTime span").html(currentDate);
}











// var curTime = $.now();
// 	var maxDate = new Date(curTime);
// 	var curDate = maxDate.toString();

// 	$(".dateTime span").html(curDate);
// .main.temp * 9/5 -459.67
//data.coord = long/lat
// http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=svillavi