var city = document.getElementById("city");
var search = document.getElementById("searchButton");
var result = document.getElementById("result");
var apikey="304af478418811667f032dda8ab80389"
console.log(city.value)


const getweather = () =>{
    let cityvalue = city.value;
    console.log(cityvalue)
    if(cityvalue.length==0){
        result.innerHTML=  `<h3 class="msg"> Enter the city </h3>`
    }
    else{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${apikey}`
        city.value="";
        fetch(url)
        .then((resp) => resp.json())
        .then((data)=>{
            console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${((data.main.temp)-273.15).toFixed(2)}&#176</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${((data.main.temp_min)-273.15).toFixed(2)}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${((data.main.temp_max)-273.15).toFixed(2)}&#176;</h4>
            </div>
        </div>
        `;
      })
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });   
    }
}
search.addEventListener('click', getweather)

