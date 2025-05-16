// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle?.contains(e.target) && !navLinks?.contains(e.target)) {
            menuToggle?.classList.remove('active');
            navLinks?.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll behavior
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > scrollThreshold) {
            header?.classList.add('header-scrolled');
        } else {
            header?.classList.remove('header-scrolled');
        }

        lastScrollTop = scrollTop;
    });
});
