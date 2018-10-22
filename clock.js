//change to 12 hour
function twelveH(i) {
  if (i == 0 ) {
    i = 12; //sets time to 12 @ midnight
  }
  if (i > 12) {
    i = i - 12; // changes to 12 hour
  }
  return i;
}
//add 0 to minutes if < 10
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//show time function
function showTime() {
  let today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();


  //change hour to 12 h
  h = twelveH(h);
  //add Zero to minutes if < 10
  m = addZero(m);

  //redefine what time is to be pasted and where
  var time = h + ":" + m;
  var dest = document.getElementById('time');
  //insert time at dest
  dest.innerHTML = time

  var timeOut = setTimeout(function(){
    showTime();
  }, 500)
}//end showTime



//convert month to string
const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

//show date
function showDate() {
  let today = new Date();
  var year = today.getYear();
  var month = today.getMonth();
  var day = today.getDay();
  var date = today.getDate();

  //redename month and day
  month = monthNames[month];
  day = dayNames[day];

  var todayDate = day + ", " + month + " " + date;
  var dest = document.getElementById('date');

  dest.innerHTML = todayDate;
}

showDate(), showTime(); //Call showTime and showDate;
