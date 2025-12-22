// 1. MOBILE MENU LOGIC
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Toggle menu open/close
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close menu when a link is clicked (good for user experience)
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


// 2. THEME TOGGLE LOGIC (Bonus - since your icons are already there)
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

// Check for saved theme or system preference
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    lightIcon.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    darkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function() {
    // Toggle icons
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    // Toggle Dark Mode class on HTML tag
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});




// // Dark Mode Logic
// const themeToggleBtn = document.getElementById('theme-toggle');
// const darkIcon = document.getElementById('theme-toggle-dark-icon');
// const lightIcon = document.getElementById('theme-toggle-light-icon');
// const html = document.documentElement;

// function applyTheme(isDark) {
//     if (isDark) {
//         html.classList.add('dark');
//         lightIcon.classList.remove('hidden');
//         darkIcon.classList.add('hidden');
//         localStorage.setItem('color-theme', 'dark');
//     } else {
//         html.classList.remove('dark');
//         lightIcon.classList.add('hidden');
//         darkIcon.classList.remove('hidden');
//         localStorage.setItem('color-theme', 'light');
//     }
// }

// if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     applyTheme(true);
// } else {
//     applyTheme(false);
// }

// themeToggleBtn.addEventListener('click', () => applyTheme(!html.classList.contains('dark')));

// // Mobile Menu Logic
// const mobileMenuBtn = document.getElementById('mobile-menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');
// const mobileLinks = document.querySelectorAll('.mobile-link');

// mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// // Close menu when clicking a link
// mobileLinks.forEach(link => {
//     link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
// });

// // skills data

// const toolsData = [
//     {
//         "name": "CSS",
//         "img_alt": "CSS",
//         "img_src": "/Images/CSS.png",
//     },
//     {
//         "name": "JS"
//         "img_alt": "JS",
//         "Img_SRC
//     }



// ]