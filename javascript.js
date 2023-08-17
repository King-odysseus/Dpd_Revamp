// const card1 = document.querySelector(".card1");
// const customTooltip = document.getElementById("custom-tooltip");

// card1.addEventListener("mouseenter", () => {
//   customTooltip.style.display = "block";
// });

// card1.addEventListener("mouseleave", () => {
//   customTooltip.style.display = "none";
// });

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});