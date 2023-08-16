let input = document.getElementById('input-text');

        document.getElementById('submit').addEventListener('click', function(){
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=0ae641804b2422dd4106265ef5420bf4&units=metric')
            .then(res => res.json())
            .then(data => {
                
                const iconValue = data.weather[0].icon;
                const nameValue = data.name;
                const temperatureValue = data.main.temp;
                const descriptionValue = data.weather[0].description;

                document.getElementById('img-condition').src = "https://openweathermap.org/img/wn/" + iconValue + "@2x.png";
                document.getElementById('name').innerText = nameValue;
                document.getElementById('temperature').innerText = temperatureValue;
                document.getElementById('description').innerText = descriptionValue;
                input.value = "";
            })
            .catch(err => alert("Wrong city name!"));
        })