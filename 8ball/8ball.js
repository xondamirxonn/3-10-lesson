const points = [
  "Qaytadan urinib \nko'r",
  "Bilmayman",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no",
];

// document.getElementById("response").innerHTML = points;  


function myFunction(){
  points.sort(function () {
    return 0.5 - Math.random();
  });
    document.getElementById("response").innerHTML = points[0];
    document.querySelector("#response").style.fontSize = "20px";
    
    setTimeout(timeUp, 1200)
    
    
    function timeUp(){
      document.getElementById("response").innerHTML = "8"
      document.getElementById("clear").innerHTML = value=""
      document.querySelector("#response").style.fontSize = "150px";  
  
  }

  

 
}