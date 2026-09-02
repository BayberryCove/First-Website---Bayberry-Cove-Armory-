// Smooth scroll to sections
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToServices() {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToForm() {
    const form = document.getElementById('contactForm');
    form.scrollIntoView({ behavior: 'smooth' });
    form.querySelector('input').focus();
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && phone && service && message) {
        // Here you would typically send the data to a server
        // For now, we'll show a success message
        showSuccessMessage();
        this.reset();
    }
});

function showSuccessMessage() {
    const successMsg = document.getElementById('successMessage');
    successMsg.style.display = 'block';
    
    // Hide after 5 seconds
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
}

// Smooth navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
