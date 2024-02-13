/** @format */

$(document).ready(function () {
  var isCardShown = false;

  // Hide GIF initially
  $(".gif-container").hide();

  $(".btns").click(function () {
    if (!isCardShown) {
      // Show GIF before animating the card
      $(".gif-container").show();
      $(".card").stop().animate(
        {
          top: "-184px",
        },
        "slow"
      );
      isCardShown = true;
    } else {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
      $(".gif-container").hide();
      isCardShown = false;
    }
  });
});

ar audio = document.querySelector("audio");
var btnPlayPause = document.getElementById("btnh1");

btnPlayPause.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    btnPlayPause.innerHTML = '<i class="fa-solid fa-heart"></i>';
  } else {
    audio.pause();
    btnPlayPause.innerHTML = '<i class="fa-solid fa-heart"></i>';
  }
});
