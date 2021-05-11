window.addEventListener("load", () => {
  var sec = 00;
  var centi = 00;
  const appendSec = document.getElementById("sec");
  const appendCenti = document.getElementById("centi");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  var interval;

  //start
  start.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });

  //stop
  stop.addEventListener("click", () => {
    clearInterval(interval);
  });

  //reset
  reset.addEventListener("click", () => {
    clearInterval(interval);
    sec = "00";
    centi = "00";
    appendSec.innerHTML = sec;
    appendCenti.innerHTML = centi;
  });

  //start timer
  function startTimer() {
    centi++;

    if (centi < 9) {
      appendCenti.innerHTML = "0" + centi;
    }
    if (centi > 9) {
      appendCenti.innerHTML = centi;
    }

    if (centi > 99) {
      sec++;
      appendSec.innerHTML = "0" + sec;
      centi = 0;
      appendCenti.innerHTML = "0" + 0;
    }

    if (sec > 9) {
      appendSec.innerHTML = sec;
    }
  }
});
