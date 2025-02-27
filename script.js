
const words = ["Web Developer", "JavaScript Enthusiast", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        typingElement.innerHTML += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const navbar = document.querySelector(".navbar-container");

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Sticky Navbar Effect on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href^='#']");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });
});


// request resume
emailjs.init(window.EMAILJS_CONFIG.PUBLIC_KEY); 

document.getElementById("request-resume").addEventListener("click", function () {
    let userName = prompt("Enter your name: ");
    let userEmail = prompt("Enter your email to receive the resume:");

    // Validate email format
    if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
        alert("Please enter a valid email address.");
        return;
    }


    emailjs.send(window.EMAILJS_CONFIG.SERVICE_ID, window.EMAILJS_CONFIG.TEMPLATE_ID, {
        to_email: userEmail,
        userName: userName,  
        reply_to: userEmail, 
        email: "bsneha.162004@gmail.com", 
        portfolio: "https://sneha-portfolio-two.vercel.app/", 
        linkedin: "https://www.linkedin.com/in/sneha-b-015a90222/", 
        github: "https://github.com/snehab162004", 
        resume_link: "https://drive.google.com/file/d/1T-2fAe54bSU9s9ZhrqAofRj6ZIQUd_5d/view", 
    }).then(function(response) {
        alert("Resume sent successfully to " + userEmail);
    }, function(error) {
        alert("Failed to send resume. Please try again.");
    });
});


