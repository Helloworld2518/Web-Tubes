$(document).ready(function () {
  $(".nav-toggle").click(function () {
    $(".nav-links").toggleClass("active");

    var isExpanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", !isExpanded);

    var icon = $(this).find(".hamburger-icon");
    if ($(".nav-links").hasClass("active")) {
      icon.attr("src", "assets/x.svg");
    } else {
      icon.attr("src", "assets/menu.svg");
    }
  });

  $(".nav-link").click(function () {
    $(".nav-links").removeClass("active");
    $(".nav-toggle").attr("aria-expanded", "false");
    $(".hamburger-icon").attr("src", "assets/menu.svg");
  });
});

//jam

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm;

  if (hours >=12){
    ampm = "PM";
  }else{
    ampm = "AM";
  }

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}.${minutes} ${ampm}`;

  document.getElementById("clock").textContent = timeString;
}

updateClock();

setInterval(updateClock, 1000);
