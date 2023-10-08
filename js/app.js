/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navList = document.getElementById("navbar__list");
const sectionsList = document.querySelectorAll("section");

let navClone;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function navBuilder() {
  sectionsList.forEach((section) => {
    navClone += `<li><a class="menu__link" id="navli" href="#${section.id}">${section.dataset.nav}</a></li>`;
  });

  navList.innerHTML = navClone;
}

navBuilder();

// Add class 'active' to section when near top of viewport
function makeActive() {
  sectionsList.forEach((section) => {
    const box = section.getBoundingClientRect();

    if (box.top <= 150 && box.bottom >= 150) {
      isActive(section);
    } else {
      isNonActive(section);
    }
  });
}

makeActive();

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
function isActive(section) {
  const id = section.getAttribute("id");

  document.getElementById(id).classList.add("your-active-class");
}

function isNonActive(section) {
  const id = section.getAttribute("id");

  document.getElementById(id).classList.remove("your-active-class");
}
