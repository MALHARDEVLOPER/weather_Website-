// const apikey="d248b7d1bc4091d0c7825c10b7079e8f";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox=document.querySelector(".search input");
const button=document.querySelector(".search button");
const Image=document.querySelector(".icon");
const video=document.querySelector(".video-background");



async function checkWeather(city){

    const response = await fetch(apiurl +city+ '&appid=d248b7d1bc4091d0c7825c10b7079e8f');
    var data= await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C";
document.querySelector(".climate").innerHTML=data.weather[0].main;

if(data.weather[0].main== "Clouds"){
    Image.src="pictures/clouds.png"; video.src="pictures/clouds.mp4";
}
else if(data.weather[0].main=="Clear"){
    Image.src="pictures/clear.png"; video.src="pictures/clear.mp4";
}
else if(data.weather[0].main=="Drizzle"){
    Image.src="pictures/drizzle.png"; video.src="picture/drizzle.mp4";
}
else if(data.weather[0].main=="Mist"){
    Image.src="pictures/mist.png";
}
else if(data.weather[0].main=="Rain"){
    Image.src="pictures/rain.png"; video.src="pictures/rain.mp4";
}
else if(data.weather[0].main=="Snow"){
    Image.src="pictures/snow.png"; video.src="pictures/snow.mp4";
}
else if(data.weather[0].main=="Haze"){
    Image.src="pictures/haze.png"; video.src="pictures/haze.mp4";
}

}


button.addEventListener("click" ,()=>{
    checkWeather(searchbox.value);

})


