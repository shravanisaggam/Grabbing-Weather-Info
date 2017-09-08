$(document).ready(function(){

	$('#submitWeather').click(function(){

		var city = $("#city").val();
		var images ={
			"coldimage" : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwifrcDWm5TWAhWIslQKHTRxBm8QjRwIBw&url=https%3A%2F%2Fwww.shutterstock.com%2Fvideo%2Fclip-8247022-stock-footage-snowfall-motion-of-a-winter-cold-weather.html&psig=AFQjCNF-bbpOXgS9tTU4ADa_GUFqskUgOQ&ust=1504912920881206'
		}

		if(city != '') {

			$.ajax({

				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=631d70fee6e9afc8c5c64cf1feaf289a",
				type: "GET",
				dataType: "jsonp",
				success: function(data) {

					if(data.weather[0].temp < 30){
						   document.body.style.backgroundImage = "url(" + images[coldimage] + ")";
					}

					var widget = show(data);
					 
					 $("#show").html(widget);

					 $("city"). val('');
				}
			});

		} else {
			$("#error").html("<div class='alert alert-danger alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
		}

		});
});

function show(data){
	return "<h3 style = 'font-size:30px; text-align: center;'>Current Weather for " + data.name + "," + data.sys.country + "</h3>" +
			"<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" + 
			"<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" + 
			 "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
			 "<h3><strong>Pressure</strong>: " + data.main.pressure + " hPa</h3>" +
			 "<h3><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
			 "<h3><strong>Minimum Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>" +
			 "<h3><strong>Maximum Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>"
			 ;
}