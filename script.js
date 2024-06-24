
const apikey = "8d032000b6818173de90280992f6b3b0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const pera=document.querySelector(".error p");


async function chechweather(city) {
    const response = await fetch(apiurl + city+ `&appid=${apikey}`);

	if(response.status==404){
		document.querySelector(".error").style.display="block";
		document.querySelector(".weather").style.display="none";
	}else{
		var data = await response.json();
    

		document.querySelector(".city").innerText=data.name;
		document.querySelector(".temp").innerText=Math.round(data.main.temp)+"°c";
		document.querySelector(".humidity").innerText=data.main.humidity+"%";
		document.querySelector(".wind").innerText=data.wind.speed+" km/h";
	
		console.log(data.weather[0].main);
		if(data.weather[0].main =="Clouds"){
			weatherIcon.src="Photos/clouds.png";
		}else if(data.weather[0].main =="Clear"){
			weatherIcon.src="Photos/clear.png";
		}else if(data.weather[0].main =="Rain"){
			weatherIcon.src="Photos/rain.png";
		}else if(data.weather[0].main =="Mist"){
			weatherIcon.src="Photos/mist.png";
		}else if(data.weather[0].main =="drizzle"){
			weatherIcon.src="Photos/drizzle.png";
		}
	
		document.querySelector(".weather").style.display="block";
		document.querySelector(".error").style.display="none";
	}
    
}

searchbtn.addEventListener("click",()=>{
	if(serachbox.value==""){
        pera.innerText="Enter Correct City Name"
		document.querySelector(".error").style.display="block";
		document.querySelector(".weather").style.display="none";
	}else{
		chechweather(serachbox.value);
	serachbox.value="";
	}
	
});




