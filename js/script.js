// Basic interactivity: theme toggle, smooth scroll, greeting, form validation

document.addEventListener('DOMContentLoaded', ()=>{
// Set current year
    document.getElementById('year').textContent = new Date().getFullYear();


// Greeting by time of day
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    if(hour < 12) greeting.textContent = 'Good morning!';
    else if(hour < 18) greeting.textContent = 'Good afternoon!';
    else greeting.textContent = 'Good evening!';


// Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click', (e)=>{
            const targetId = a.getAttribute('href').slice(1);
            const el = document.getElementById(targetId);
            if(el){
                e.preventDefault();
                el.scrollIntoView({behavior:'smooth',block:'start'});
            }
        });
    });


// Theme toggle
    const toggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const moonSVG = '<img src="/assets/moon.png" alt="moon">'
    const sunSVG ='<img src="/assets/sun.png" alt="sun">'

// load saved theme
    function setTheme(theme) {
        if (theme === "dark") {
            root.setAttribute("data-theme", "dark");
            toggle.innerHTML = sunSVG;
        } else {
            root.setAttribute("data-theme", "light");
            toggle.innerHTML = moonSVG;
        }
        localStorage.setItem("theme", theme);
    }

// Restore theme on page load
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

// Toggle on click
    toggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        setTheme(current === "dark" ? "light" : "dark");
    });


// Contact form basic validation (no backend)
    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        if(!name || !email || !message){
            formMsg.textContent = 'Please fill in all fields.';
            return;
        }

        // naive email check
        const emailOK = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
        if(!emailOK){
            formMsg.textContent = 'Please provide a valid email address.';
            return;
        }
        formMsg.textContent = 'Thanks — your message is ready to be sent! (No backend configured)';
        form.reset();
    });
});

// Scroll animation for skill cards
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");
    const skills = document.querySelectorAll(".skill");

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom > 0
        );
    }

    function animateProjects() {
        projects.forEach(project => {
            if (isInViewport(project)) {
                project.classList.add("visible");
            } else {
                project.classList.remove("visible");
            }
        });
    }

    function animateSkills() {
        skills.forEach(skill => {
            if (isInViewport(skill)) {
                skill.classList.add("visible");
            } else {
                skill.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", animateProjects);
    window.addEventListener("resize", animateProjects);
    animateProjects(); // Initial check

    window.addEventListener("scroll", animateSkills);
    window.addEventListener("resize", animateSkills);
    animateSkills(); // Initial check
});
