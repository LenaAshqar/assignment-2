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
    const sunSVG = '<img src="/assets/moon.png" alt="moon">'
    const moonSVG ='<img src="/assets/sun.png" alt="sun">'

// load saved theme
    if(localStorage.getItem('theme') === 'dark') root.setAttribute('data-theme','dark');
    toggle.addEventListener('click', ()=>{
        const isDark = root.getAttribute('data-theme') === 'dark';
        if(isDark){
            root.removeAttribute('data-theme');
            localStorage.setItem('theme','light');
            toggle.innerHTML = moonSVG;
        } else {
            root.setAttribute('data-theme','dark');
            localStorage.setItem('theme','dark');
            toggle.innerHTML = sunSVG;
        }
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