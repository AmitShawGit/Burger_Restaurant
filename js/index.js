let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);


tl.from(".hero-heading , .hero-description , .btn",{
    y:500,
    stagger:1,
    opacity:0
});

tl.from(" #ourChef ", {
    y: 500,
    ease: 'power4.out',
    scrollTrigger: {
        trigger: ".heading",
        markers: true,
   
    }
})
