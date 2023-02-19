  function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var period = "Am";

  if (hours == 0) {
    hours = 12;
  }

  if (hours >= 12) {
    period = "PM";
  }
  
  if (hours > 12){
    hours = hours - 12;
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds + " " + period;

  document.querySelector("#digitalClock").innerText = time;
  document.querySelectorAll("#digitalClock").textContent = time;

  setTimeout(showTime, 1000);

}

showTime();

	

