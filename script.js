const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// SCROLL ANIMATION
function reveal(){
const elements = document.querySelectorAll(".reveal");

elements.forEach(el => {
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", reveal);
reveal();