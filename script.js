document.addEventListener('DOMContentLoaded', function() {
    // Navigation Active State
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    function setActiveLink() {
        let index = contentSections.length;
        
        while(--index && window.scrollY + 100 < contentSections[index].offsetTop) {}
        
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked nav link
            this.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected content section
            const sectionId = this.getAttribute('data-section') + '-content';
            document.getElementById(sectionId).classList.add('active');
            
            // Scroll to the section
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Initialize carousel
    const myCarousel = new bootstrap.Carousel(document.getElementById('mainCarousel'), {
        interval: 5000,
        wrap: true,
        pause: false
    });
    
    // Scroll event listener
    window.addEventListener('scroll', setActiveLink);
    
    // Set initial active state
    setActiveLink();
    
    // Form submission handling
    const contactForm = document.querySelector('#contact-content form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you shortly.');
            this.reset();
        });
    }
});