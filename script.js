// Smooth scrolling for anchor links
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

// Hover effect toggle for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// AWS Visitor Counter Integration
const API_ENDPOINT = 'https://wafm7ccknj.execute-api.us-east-2.amazonaws.com/count';

async function updateVisitorCount() {
    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        
        const countElement = document.getElementById('visitor-count');
        if (countElement && data.count !== undefined) {
            countElement.textContent = data.count;
        }
    } catch (error) {
        console.error('Error fetching visitor counter from AWS:', error);
    }
}

// Fetch counter when DOM is loaded
document.addEventListener('DOMContentLoaded', updateVisitorCount);