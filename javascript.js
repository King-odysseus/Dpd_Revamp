
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




// Function to switch between tabs
function openTab(evt, tabName) {
  // Get all elements with class "tab-content" and hide them
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
  }

  // Get all elements with class "tab-button" and remove the "active" class
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
  }

  // Show the selected tab content and mark the button as active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Initially, show the first tab
document.getElementById("tab1").style.display = "block";
document.querySelector(".tab-button").classList.add("active");


// Responsive nav Bar


