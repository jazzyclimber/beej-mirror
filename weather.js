
function apiRequest() {
  //create new XMLHttpRequest
  var request = new XMLHttpRequest();

  // open a new conection using get
  request.open('get', 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=1de0167063f9f2c63e4aff1f18c1e720&zip=53151,us&units=imperial', true);

  //directions for what to do on load of request
  request.onload = function() {

    //if successful parse data
    if (request.status === 200) {
       var data = JSON.parse(this.response);

       //store parsed data in variables
       var city = data.name;
       var temp = Math.round(data.main.temp) + ' F';
       var weather = data.weather[0].main;
       var icon = '<img src="weather-icons/' + data.weather[0].icon + '.svg" alt="' + data.weather[0].icon + '">';

       //build divs to house data and set their class names
       //Place the stored data inside of div
       const cityDiv = document.createElement('div');
       cityDiv.setAttribute('class', 'city');
       cityDiv.textContent = city;

       const tempDiv = document.createElement('div');
       tempDiv.setAttribute('class', 'temp');
       tempDiv.textContent = temp;

       const weatherDiv = document.createElement('div');
       weatherDiv.setAttribute('class', 'weather');
       weatherDiv.textContent = weather;

       const iconDiv = document.createElement('div');
       iconDiv.setAttribute('id', 'icon');
       iconDiv.innerHTML = icon;

       //grabs container to paste new divs into
       const container = document.getElementById('weather-module-content');
       const iconContainer = document.getElementById('weather-module');

       // Delete contents of containing divs
       //Must happen here to avoid DOM flicker on reload
       document.getElementById('icon').parentNode.removeChild(document.getElementById('icon'));
       container.textContent = "";

       //append divs in appropriate places
       iconContainer.insertBefore(iconDiv, container);
       container.appendChild(cityDiv);
       container.appendChild(tempDiv);
       container.appendChild(weatherDiv);


    } else {
      console.log('Error');
    }
  }//end load
  request.send();

  //Loops the function every Minute
  var timeOut = setTimeout(function() {
    apiRequest();
  },60*1000)

}//end apiRequest()

//Calls apiRequest()
apiRequest();
