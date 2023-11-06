let countDown = new Date("Jan 1, 2024 00:00:00").getTime();

let x = setInterval(function() {
  let now = new Date().getTime();
  let masofa = countDown - now;
  
  let day = Math.floor(masofa / (1000 * 60 * 60 * 24));
  let hour = Math.floor(masofa % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minute = Math.floor(masofa % (1000 * 60 * 60) / (1000 * 60));
  let second = Math.floor(masofa % (1000 * 60) / 1000);
  
  document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;

  if(masofa < 0){
     document.getElementById("day").innerHTML = "00";
     document.getElementById("hour").innerHTML = "00";
     document.getElementById("minute").innerHTML = "00";
     document.getElementById("second").innerHTML = "00";
  }
}, 1000);
