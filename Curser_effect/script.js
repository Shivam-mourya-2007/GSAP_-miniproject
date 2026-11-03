
const main = document.querySelector("#main");
const curser = document.querySelector("#curser");
const photo = document.querySelector("#image");

// Set cursor position to center
gsap.set(curser, {
    xPercent: -50,
    yPercent: -50
});

// Create optimized mouse movement functions
const xTo = gsap.quickTo(curser, "x", {
    duration: 0.3,
    ease: "power3.out"
});

const yTo = gsap.quickTo(curser, "y", {
    duration: 0.3,
    ease: "power3.out"
});

// Mouse movement
main.addEventListener("mousemove", function(dets) {
    xTo(dets.clientX);
    yTo(dets.clientY);
});

// Mouse enter image
photo.addEventListener("mouseenter", function() {
    curser.innerHTML = "View more";

    gsap.to(curser, {
        width: 60,
        height: 60,
        backgroundColor: "rgba(255, 255, 255, 0.35)",
        duration: 0.4,
        ease: "power2.out"
    });
});

// Mouse leave image
photo.addEventListener("mouseleave", function() {
    curser.innerHTML = "";

    gsap.to(curser, {
        width: 20,
        height: 20,
        backgroundColor: "#ffffff",
        duration: 0.4,
        ease: "power2.out"
    });
});
