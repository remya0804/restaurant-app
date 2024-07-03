//  Toggle menu
// ********************************************************************


let navbarElement = document.querySelector(".navbar");
let menubarElement = document.querySelector("#menu-bars");



const menuToggle = () => {

    menubarElement.classList.toggle("fa-times");

    navbarElement.classList.toggle("show-menu");
}


//  change menu active on scroll
// ********************************************************************

const sectionElement = document.querySelectorAll("section");
const navElement = document.querySelectorAll("header .navbar a")

window.onscroll = () => {

    // menubarElement.classList.remove("fa-times");

    // navbarElement.classList.remove("show-menu");

     
    sectionElement.forEach((sec) => {

        let top = window.scrollY;   // pixels a document has scrolled from the upper left corner of the window.
        let height = sec.offsetHeight; // viewable height of an element (in pixels), including padding, border and scrollbar, but not the margin.
        let offset = sec.offsetTop - 150; // top position (in pixels) relative to the parent.
        let id = sec.getAttribute('id');  

        if(top >= offset && top < offset + height){

            navElement.forEach((link) => {

                link.classList.remove('active');

                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}


//  change search form
// ********************************************************************

let searchformElement = document.querySelector("#search-form");

const openSearch = () => {

    searchformElement.classList.toggle("close-search");


}
const closeSearch = () => {

    searchformElement.classList.remove("close-search");


}

//  load
// ********************************************************************


const loaderElement = document.querySelector('.loader-container');

const loaderFunction = () => {

    loaderElement.classList.add("fade-out");
} 


const fadeoutFunction = () => {

    setInterval(loaderFunction,2000)
}

window.onload = fadeoutFunction();



