
let tempreture = document.querySelector("#tempreture");
const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '68cc1e7b9bmsh3f2b4a3e3e949eap11757bjsn55e310e2a5e2',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }

};
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        tempreture.innerHTML = `Max_tempreture ${response.max_temp} C`
    })
    .catch(err => console.log(err))
