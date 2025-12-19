
// Dark Mode Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const html = document.documentElement;

function applyTheme(isDark) {
    if (isDark) {
        html.classList.add('dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
        localStorage.setItem('color-theme', 'dark');
    } else {
        html.classList.remove('dark');
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
        localStorage.setItem('color-theme', 'light');
    }
}

if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    applyTheme(true);
} else {
    applyTheme(false);
}

themeToggleBtn.addEventListener('click', () => applyTheme(!html.classList.contains('dark')));

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// skills data

const toolsData = [
    {
        "name": "CSS",
        "img_alt": "CSS",
        "img_src": "/Images/CSS.png",
    },
    {
        "name": "JS"
        "img_alt": "JS",
        "Img_SRC
    }



]