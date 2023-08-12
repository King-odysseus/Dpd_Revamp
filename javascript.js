const card1 = document.querySelector(".card1");
const customTooltip = document.getElementById("custom-tooltip");

card1.addEventListener("mouseenter", () => {
  customTooltip.style.display = "block";
});

card1.addEventListener("mouseleave", () => {
  customTooltip.style.display = "none";
});