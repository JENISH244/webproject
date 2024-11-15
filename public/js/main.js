const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityval = cityName.value;
    if(cityval === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=b5fa7a3ed07d7fc58c5791f6119a1960`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const arrData = [data];

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = `${(arrData[0].main.temp - 273.15).toFixed(2)}°C`;
        const tempMood = arrData[0].weather[0].main;

        if(tempMood == "Clear"){
            temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68"></i>'
        } else if(tempMood == "Clouds"){
            temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #dfe4ea"></i>'
        } else if(tempMood == "Rain"){
            temp_status.innerHTML = '<i class="fas fa-cloud-rain" style="color: #a4b0be"></i>'
        } else {
            temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #dfe4ea"></i>'
        }

        datahide.classList.remove('data_hide');



        }catch{
            city_name.innerText = `Plz enter the city name prooerly`;
            datahide.classList.add('data_hide');

        }
    }

}
// (orgVal.main.temp - 273.15).toFixed(2)

submitBtn.addEventListener('click', getInfo)