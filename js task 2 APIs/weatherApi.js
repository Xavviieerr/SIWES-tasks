let city = document.getElementById('city');
let output = document.getElementById('temp');
let output2 = document.getElementById('image');
const image = document.getElementById("img")
let button = document.getElementById('btn');
let button2 = document.getElementById('btn2');
let main = document.getElementById('main');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=metric&appid=4c20f7b5fe02a6ef8975444ff3590e5c')
    .then(response => response.json())
    .then(data => {
        console.log(data);
         tempV = data.main.temp;
         output.innerHTML = tempV;
    })

    
});

button2.addEventListener('click', function(){
    fetch('https://api.unsplash.com/photos/random?client_id=gdBcbi69XDk-40J6nJgzv9LvHw845IUNxgHKg1dcOrY?count=5')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // tempF = data;

        for (let index = 0; index < data.length; index++) {
            main.childNodes[index].src = data[index].urls.regular;
        }
    })
});
// full raw regular small small_s3 thumb
