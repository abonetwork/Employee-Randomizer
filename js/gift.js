// window.onload = function() {
//   var merrywrap = document.getElementById("merrywrap");
//   var box = merrywrap.getElementsByClassName("giftbox")[0];
//   var step = 1;
//   var stepMinutes = [3000, 3000, 2000, 2000];
//   function init() {
//     box.addEventListener("click", openBox, false);
//   }
//   function stepClass(step) {
//     merrywrap.className = "merrywrap";
//     merrywrap.className = "merrywrap step-" + step;
//   }
//   function openBox() {
//     if (step === 1) {
//       box.removeEventListener("click", openBox, false);
//     }
//     stepClass(step);
//     if (step === 3) {
//     }
//     if (step === 4) {
//       return;
//     }
//     setTimeout(openBox, stepMinutes[step - 1]);
//     step++;
//   }

//   init();
// };

$(document).ready(function() {
  var $clickMe = $(".click-icon"),
    $card = $(".card");

  $card.on("click", function() {
    $(this).toggleClass("is-opened");
    $clickMe.toggleClass("is-hidden");
  });

  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [3000, 3000, 2000, 2000];
  function init() {
    box.addEventListener("click", openBox, false);
  }
  function stepClass(step) {
    merrywrap.className = "merrywrap";
    merrywrap.className = "merrywrap step-" + step;
  }
  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);
    if (step === 2) {
      $("#merrywrap").hide();
      $("#xcard").show();
    }
    if (step === 3) {
    }
    if (step === 4) {
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();
});
