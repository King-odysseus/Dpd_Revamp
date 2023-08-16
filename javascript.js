// const card1 = document.querySelector(".card1");
// const customTooltip = document.getElementById("custom-tooltip");

// card1.addEventListener("mouseenter", () => {
//   customTooltip.style.display = "block";
// });

// card1.addEventListener("mouseleave", () => {
//   customTooltip.style.display = "none";
// });


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });