const nav = document.querySelector("#mainnav");
nav.classList.add("js"); //if javascript is disabled, navigation will always be visible

const list = nav.querySelector("ul");
const menuBtn = nav.querySelector("button");

menuBtn.addEventListener("click", () => {
    const isClosed = menuBtn.getAttribute("aria-expanded") === "false"; //returns boolean
    menuBtn.setAttribute("aria-expanded", isClosed); //if isClosed is true, menu will expand and vice versa
})

nav.addEventListener("keyup", (e) => { //hide nav on escape
    if (e.code === "Escape") {
        menuBtn.setAttribute("aria-expanded", false);
    }
})

//handle links

const navLinks = [...nav.querySelectorAll("a")];

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        removeCurrentPageAttr();
        e.currentTarget.setAttribute("aria-current", "page"); //set as current page
        menuBtn.setAttribute("aria-expanded", false); //close menu
    })
})

const removeCurrentPageAttr = () => navLinks.forEach(link => link.removeAttribute("aria-current"));