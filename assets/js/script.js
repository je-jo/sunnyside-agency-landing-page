const nav = document.querySelector("#mainnav");
//nav.classList.add("js"); //if javascript is disabled, navigation will always be visible

const list = nav.querySelector("ul");
//const menuBtn = nav.querySelector("button");
const menuBtn = document.createElement("button");
const menuIcon = document.createElement("img");

menuBtn.setAttribute("type", "button");
menuBtn.classList.add("btn--menu")
menuBtn.setAttribute("aria-expanded", "false");
menuBtn.setAttribute("aria-label", "Menu");
menuBtn.setAttribute("aria-controls", "mainnav");
menuIcon.setAttribute("src", "/assets/images/icon-hamburger.svg")
menuIcon.setAttribute("alt", "");
menuIcon.setAttribute("aria-hidden", "true");
menuBtn.appendChild(menuIcon);
nav.insertBefore(menuBtn, list)


menuBtn.addEventListener("click", () => {
    const isClosed = menuBtn.getAttribute("aria-expanded") === "false"; //returns boolean
    menuBtn.setAttribute("aria-expanded", isClosed); //if isClosed is true, menu will expand and vice versa
})

nav.addEventListener("keyup", (e) => { //hide nav on escape
    if (e.code === "Escape") {
        menuBtn.setAttribute("aria-expanded", false);
    }
})

//hide mobile menu when user clicks on a link

const navLinks = [...nav.querySelectorAll("a")];

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        menuBtn.setAttribute("aria-expanded", false); 
    })
})

/* <button id="btn-menu" type="button" aria-expanded="false" aria-label="Menu" aria-controls="mainnav">
<img src="/assets/images/icon-hamburger.svg" alt="" aria-hidden="true">
</button> */