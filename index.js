window.onload = function () {
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var tens = 00;

    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var appendHours = document.getElementById("hours");

    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');

    var Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";

        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    }

    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        } else {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = minutes <= 9 ? "0" + minutes : minutes;
            seconds = 0;
            appendSeconds.innerHTML = "00";
        }

        if (minutes > 59) {
            hours++;
            appendHours.innerHTML = hours <= 9 ? "0" + hours : hours;
            minutes = 0;
            appendMinutes.innerHTML = "00";
        }
    }
}





// window.onload = function () {
//     var hours = 00;
//     var minutes = 00;
//     var seconds = 00; 
//     var tens = 00; 

//     var appendHours = document.getElementById("hours")
//     var appendMinutes = document.getElementById("minutes")
//     var appendTens = document.getElementById("tens")
//     var appendSeconds = document.getElementById("seconds")
  
//     var buttonStart = document.getElementById('button-start');
//     var buttonStop = document.getElementById('button-stop');
//     var buttonReset = document.getElementById('button-reset');
//     var Interval ;
  
//     buttonStart.onclick = function() {
      
//       clearInterval(Interval);
//        Interval = setInterval(startTimer, 10);
//     }
    
//       buttonStop.onclick = function() {
//          clearInterval(Interval);
//     }
    
  
//     buttonReset.onclick = function() {
//        clearInterval(Interval);
//       hours = "00";
//       minutes = "00";
//       tens = "00";
//       seconds = "00";

//       appendHours.innerHTML = hours;
//       appendMinutes.innerHTML = minutes;
//       appendTens.innerHTML = tens;
//       appendSeconds.innerHTML = seconds;
//     }
    
     
    
//     function startTimer () {
//       tens++; 
      
//       if(tens <= 9){
//         appendTens.innerHTML = "0" + tens;
//       }
      
//       if (tens > 9){
//         appendTens.innerHTML = tens;
        
//       } 
      
//       if (tens > 99) {
//         console.log("seconds");
//         seconds++;
//         appendSeconds.innerHTML = "0" + seconds;
//         tens = 0;
//         appendTens.innerHTML = "0" + 0;
//       }
      
//       if (seconds > 9){
//         appendSeconds.innerHTML = seconds;
//       }
    
//     }
    
  
//   }