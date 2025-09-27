// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Wedding Countdown Timer
    function updateCountdown() {
        const weddingDate = new Date('2025-11-29T00:00:00');
        const now = new Date();
        const difference = weddingDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        } else {
            // Wedding day has arrived
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
        }
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Generate Important Members
    generateMembers();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Generate Important Members Function
function generateMembers() {
    const groomMembers = [
        { name: "Rajesh Kumar", relation: "Father", photo: "https://via.placeholder.com/120x120/4FC3F7/FFFFFF?text=RK" },
        { name: "Sunita Kumar", relation: "Mother", photo: "https://via.placeholder.com/120x120/E91E63/FFFFFF?text=SK" },
        { name: "Rohit Kumar", relation: "Brother", photo: "https://via.placeholder.com/120x120/FF9800/FFFFFF?text=RoK" },
        { name: "Priya Kumar", relation: "Sister", photo: "https://via.placeholder.com/120x120/9C27B0/FFFFFF?text=PK" },
        { name: "Ramesh Kumar", relation: "Uncle", photo: "https://via.placeholder.com/120x120/4CAF50/FFFFFF?text=RaK" },
        { name: "Geeta Kumar", relation: "Aunt", photo: "https://via.placeholder.com/120x120/FF5722/FFFFFF?text=GK" },
        { name: "Vikash Kumar", relation: "Cousin", photo: "https://via.placeholder.com/120x120/607D8B/FFFFFF?text=VK" },
        { name: "Neha Kumar", relation: "Cousin", photo: "https://via.placeholder.com/120x120/795548/FFFFFF?text=NK" },
        { name: "Suresh Kumar", relation: "Grandfather", photo: "https://via.placeholder.com/120x120/3F51B5/FFFFFF?text=SuK" },
        { name: "Kamala Kumar", relation: "Grandmother", photo: "https://via.placeholder.com/120x120/E91E63/FFFFFF?text=KK" },
        { name: "Ankit Kumar", relation: "Cousin", photo: "https://via.placeholder.com/120x120/009688/FFFFFF?text=AK" },
        { name: "Ritu Kumar", relation: "Cousin", photo: "https://via.placeholder.com/120x120/FFEB3B/FFFFFF?text=RiK" },
        { name: "Deepak Kumar", relation: "Uncle", photo: "https://via.placeholder.com/120x120/F44336/FFFFFF?text=DK" },
        { name: "Meera Kumar", relation: "Aunt", photo: "https://via.placeholder.com/120x120/2196F3/FFFFFF?text=MK" },
        { name: "Sanjay Kumar", relation: "Family Friend", photo: "https://via.placeholder.com/120x120/8BC34A/FFFFFF?text=SaK" }
    ];

    const brideMembers = [
        { name: "Mahesh Sharma", relation: "Father", photo: "https://via.placeholder.com/120x120/673AB7/FFFFFF?text=MS" },
        { name: "Sunita Sharma", relation: "Mother", photo: "https://via.placeholder.com/120x120/E91E63/FFFFFF?text=SuS" },
        { name: "Amit Sharma", relation: "Brother", photo: "https://via.placeholder.com/120x120/00BCD4/FFFFFF?text=AS" },
        { name: "Kavya Sharma", relation: "Sister", photo: "https://via.placeholder.com/120x120/FFC107/FFFFFF?text=KS" },
        { name: "Vinod Sharma", relation: "Uncle", photo: "https://via.placeholder.com/120x120/9E9E9E/FFFFFF?text=VS" },
        { name: "Radha Sharma", relation: "Aunt", photo: "https://via.placeholder.com/120x120/FF9800/FFFFFF?text=RS" },
        { name: "Arjun Sharma", relation: "Cousin", photo: "https://via.placeholder.com/120x120/4CAF50/FFFFFF?text=ArS" },
        { name: "Pooja Sharma", relation: "Cousin", photo: "https://via.placeholder.com/120x120/E91E63/FFFFFF?text=PS" },
        { name: "Ram Sharma", relation: "Grandfather", photo: "https://via.placeholder.com/120x120/795548/FFFFFF?text=RaS" },
        { name: "Sita Sharma", relation: "Grandmother", photo: "https://via.placeholder.com/120x120/9C27B0/FFFFFF?text=SiS" },
        { name: "Ravi Sharma", relation: "Cousin", photo: "https://via.placeholder.com/120x120/F44336/FFFFFF?text=RvS" },
        { name: "Nisha Sharma", relation: "Cousin", photo: "https://via.placeholder.com/120x120/3F51B5/FFFFFF?text=NS" },
        { name: "Kishore Sharma", relation: "Uncle", photo: "https://via.placeholder.com/120x120/009688/FFFFFF?text=KiS" },
        { name: "Lata Sharma", relation: "Aunt", photo: "https://via.placeholder.com/120x120/CDDC39/FFFFFF?text=LS" },
        { name: "Anil Sharma", relation: "Family Friend", photo: "https://via.placeholder.com/120x120/FF5722/FFFFFF?text=AnS" }
    ];

    function createMemberCard(member) {
        return `
            <div class="member-card">
                <img src="${member.photo}" alt="${member.name}" class="member-photo">
                <h4 class="member-name">${member.name}</h4>
                <p class="member-relation">${member.relation}</p>
            </div>
        `;
    }

    // Populate groom's side members
    const groomMembersContainer = document.getElementById('groom-members');
    groomMembersContainer.innerHTML = groomMembers.map(createMemberCard).join('');

    // Populate bride's side members
    const brideMembersContainer = document.getElementById('bride-members');
    brideMembersContainer.innerHTML = brideMembers.map(createMemberCard).join('');
}

// Download Invitation Function
function downloadInvitation() {
    // Create a simple alert for now - in a real implementation, you would trigger a PDF download
    alert('Thank you for your interest! The invitation download feature will be available soon. Please check back later or contact us directly.');

    // In a real implementation, you might do something like:
    // const link = document.createElement('a');
    // link.href = 'path/to/wedding-invitation.pdf';
    // link.download = 'Shiwani-Manish-Wedding-Invitation.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
}

// Add some scroll animations
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function () {
    const animateElements = document.querySelectorAll('.schedule-card, .member-card, .contact-card, .about-person, .timeline-item');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading effect
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});

// Initialize on page load
document.body.style.opacity = '0';
document.body.style.transform = 'translateY(20px)';
document.body.style.transition = 'opacity 0.5s ease, transform 0.5s ease';