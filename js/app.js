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
 * Define Global Variables
 * 
*/
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/ 
function elementInViewport(elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// TODO: Build nav bar (✔)
function BuildNavBar(){
    for(let section of sections){
        let sec = document.createElement("li");
        sec.className = "list-item";
        sec.dataset.nav = section.id;
        sec.innerText = sec.dataset.nav;
        navbar.appendChild(sec);
    }
}

// Add class 'active' to section when near top of viewport
function activateSection(){
    for(let section of sections){
        if(elementInViewport(section)){
            section.classList.add("your-active-class");
        }
        else{
            section.classList.remove("your-active-class");
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToClick() {
    navbar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav);
        //console.log(clicked);
        //clicked.scrollIntoView();
        window.scrollTo({
            top: clicked.offsetTop - navbar.offsetHeight,
            behavior: 'smooth',
          });
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
BuildNavBar();
// Scroll to section on link click
scrollToClick();
// Set sections as active
document.addEventListener('scroll', function () {
    activateSection();
});

