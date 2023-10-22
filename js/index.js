let tl = gsap.timeline();
let src = gsap.registerPlugin(ScrollTrigger);

let navbar = document.getElementsByClassName('navbar');

console.log(window.scrollY);
console.log(navbar);
if(window.scrollY < 100){
    navbar.classList.add("sticky")
}
else{
    navbar.classList.remove("sticky")
}