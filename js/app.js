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

//Define Global Variables

const navBar = document.querySelector(".navbar__menu");
const navList = document.getElementById("navbar__list");
const sectionsList = document.querySelectorAll("section");
const header = document.querySelector(".page__header");
const footer = document.querySelector(".page__footer");
const scrollBtn = document.getElementById("scrollBtn");

// Generating Navbar
function navBuilder() {
  sectionsList.forEach((section) => {
    const navLink = document.createElement("li");
    // Adding the corresponding id to each nav link and the corresponding dataset
    navLink.insertAdjacentHTML(
      "afterbegin",
      `<a class="menu__link" id="navli" href="#${section.id}">${section.dataset.nav}</a>`
    );

    navList.appendChild(navLink);

    // Adding scroll action to nav link
    scrollToSection(navLink, section);
  });
  navBar.appendChild(navList);
}
navBuilder();

// Add class 'active' to section when near top of viewport
function makeActive() {
  sectionsList.forEach((section) => {
    // Get the relative position for each section
    const box = section.getBoundingClientRect();

    if (box.top <= 150 && box.bottom >= 150) {
      isActive(section);
    } else {
      isNonActive(section);
    }
  });
}

makeActive();

window.addEventListener("scroll", (e) => {
  // active section
  makeActive();
  // nav bar visiability
  toggleNavbar();
  // scroll button
  scrollTop();
});

// Scroll to anchor ID using scrollTO event
function scrollToSection(navLink, section) {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  });
}
// toggling the header to only show when user scrolls
function toggleNavbar() {
  // timeout id for calling clearTimeout
  let userScroll;

  header.style.cssText = "opacity: 1; transition: ease 0.3s;";
  // clear any previus timeouts set by setTimeout()
  window.clearTimeout(userScroll);
  // calling setTimeout() with the id, after 5000ms of the user not scrolling hide the header
  userScroll = setTimeout(() => {
    header.style.cssText = "opacity: 0; transition: ease 0.3s;";
  }, 5000);
}

// Set sections as active
function isActive(section) {
  const id = section.getAttribute("id");
  document.getElementById(id).classList.add("your-active-class");
}

function isNonActive(section) {
  const id = section.getAttribute("id");

  document.getElementById(id).classList.remove("your-active-class");
}

// scroll button event
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// adding scroll to top button

function scrollTop() {
  // footer offset where the button will be positioned
  let footerOffset = footer.offsetTop - 640;
  let currentUsrScroll = window.scrollY;
  // if the user scrolls pass the offset the button will show, else it will be hidden
  if (currentUsrScroll >= footerOffset) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
}
