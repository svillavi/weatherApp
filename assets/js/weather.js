//weather app javascript/ajax/jquery

//button to initiate get against API.
$("i").on("click", function(data){
	var location = $("input").val();
	getWeather(location);
});

function getWeather(city){
	//making API Call with key appended.
$.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=9ea2203f896a7121060a24be0056ac22", function(data){
	console.log(data);
	$(".location h1").html(data.name);
	var decNotFixed = $(".temp span").html((data.main.temp * 9/5 -459.67).toFixed(0));

	$(".condition h1").html(data.weather[0].description);
	$(".condition span:first").html(data.weather[0]);
	console.log(data);
});
}



// .main.temp * 9/5 -459.67